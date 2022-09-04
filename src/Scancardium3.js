// const Scancardium3 = require('..fonts/Scancardium3');
import Scancardium3 from '../fonts/Scancardium3'

const TransactionStyle = createGlobalStyle`
  @font-face {
    font-family: 'Scancardium3';
    src: url(${Scancardium3}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
  
 /* latin */
  @font-face {
    font-family: 'Scancardium3';
    font-style: normal;
    font-weight: 400;
    font-display: fallback;
    src: local('Scancardium3'), local('Scancardium3'), url(../fonts/Scancardium3.woff2) format('woff2');
  }

@font-face {
    font-family: 'Scancardium3', monospace;
    src: url(../fonts/Scancardium3.woff2) format('woff2'),
         url(../fonts/Scancardium3.woff) format('woff');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

  /* latin */
@font-face {
    font-family: 'Scancardium3';
    font-style: normal;
    font-display: fallback;
    src: local('Scancardium3'), local('Scancardium3'), url(../fonts/Scancardium3.woff2) format('woff2');
  }
`
export default Scancardium3
