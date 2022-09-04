import url from '@rollup/plugin-url';
import typescript from 'rollup-plugin-typescript2'

export default {
  input: 'index.ts',
  output: [
    {
      exports: 'default',
      file: 'index.es.js',
      format: 'es'
    },
    {
      exports: 'default',
      file: 'index.cjs.js',
      format: 'cjs'
    }
  ],
plugins: [
    url({
      include: ['**/*.woff', '**/*.woff2', '**/*.ttf'],
      limit: Infinity,
      fileName: '[dirname][name][extname]',
    }),
  ],
  external: ['fs', 'path', 'rollup-pluginutils']
};
