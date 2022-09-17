import { existsSync, mkdirSync, writeFile } from 'fs'
import { basename, dirname, resolve } from 'path'
import { createFilter, CreateFilter } from 'rollup-pluginutils'

import type { Plugin } from 'rollup'

export interface CSSPluginOptions {
  exclude?: Parameters<CreateFilter>[1]
  failOnError?: boolean
  include?: Parameters<CreateFilter>[0]
  includePaths?: string[]
  insert?: boolean
  output?: string | false | ((css: string, styles: Styles) => void)
  prefix?: string
  processor?: (
    css: string,
    map: string,
    styles: Styles
  ) => CSS | Promise<CSS> | PostCSSProcessor
  sass?: SassRenderer
  sourceMap?: boolean
  verbose?: boolean
  watch?: string | string[]
}

type ImporterReturnType = { file: string } | { contents: string } | Error | null

type ImporterDoneCallback = (data: ImporterReturnType) => void

type CSS = string | { css: string; map: string }

interface MappedCSS {
  css: string
  map: string
}

interface Styles {
  [id: string]: string
}

interface PostCSSProcessor {
  process: (css: string, options?: any) => MappedCSS
}

interface SassRenderer {
  renderSync: (options: SassOptions) => SassResult
}

interface SassOptions {
  data: string
}

interface SassResult {
  css: Buffer
  map?: Buffer
}

export default function scss(options: CSSPluginOptions = {}): Plugin {
  const filter = createFilter(
    options.include || ['/**/*.css', '/**/*.scss', '/**/*.sass'],
    options.exclude
  )
  let dest = typeof options.output === 'string' ? options.output : null
  const insertStyleFnName = '___$insertStylesToHeader'

  const styles: Styles = {}
  const prefix = options.prefix ? options.prefix + '\n' : ''
  let includePaths = options.includePaths || ['node_modules/']
  includePaths.push(process.cwd())
  
/**
 * Create a style tag and append to head tag
 *
 * @param {String} css style
 * @return {String} css style
 */
const insertStyleFn = `function insertStyleFn(css) {
  if (!css) {
    return
  }
  if (typeof window === 'undefined') {
    return
  }
  const style = document.createElement('style');
  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css
}`


function loadSassLibrary(): SassRenderer {
  try {
    return require('sass')
  } catch (e) {
    return require('node-sass')
  }
}

function stringToCSS(input: string | CSS): MappedCSS {
  if (typeof input === 'string') {
    return { css: input, map: '' }
  }
  return input
}

function red(text: string) {
  return '\x1b[1m\x1b[31m' + text + '\x1b[0m'
}

function green(text: string) {
  return '\x1b[1m\x1b[32m' + text + '\x1b[0m'
}

function getSize(bytes: number) {
  return bytes < 10000
    ? bytes.toFixed(0) + ' B'
    : bytes < 1024000
    ? (bytes / 1024).toPrecision(3) + ' kB'
    : (bytes / 1024 / 1024).toPrecision(4) + ' MB'
}

function ensureParentDirsSync(dir: string) {
  if (existsSync(dir)) {
    return
  }

  try {
    mkdirSync(dir)
  } catch (err) {
    if (err.code === 'ENOENT') {
      ensureParentDirsSync(dirname(dir))
      ensureParentDirsSync(dir)
    }
  }
}
Footer
