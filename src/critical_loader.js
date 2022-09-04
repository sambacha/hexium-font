/* Font loading: Critical FOFT with preload, see: https://www.zachleat.com/web/comprehensive-webfonts/#critical-foft-with-preload */
(function() {
  if ('fonts' in document) {
    /* Optimization for Repeat Views */
    if (sessionStorage.fontsLoadedCriticalFoftPreload) {
      document.documentElement.className += ' fonts-loaded-2';
      return;
    }
    document.fonts.load("1em 'Scancardium3'")
      .then(function() {
        document.documentElement.className += ' fonts-loaded-1';
        Promise.all([
        document.fonts.load("400 1em 'Scancardium3'"),
        document.fonts.load("700 1em 'Scancardium3'"),
        document.fonts.load("bold 1em 'Scancardium3'"),
        document.fonts.load("bold 700 1em 'Scancardium3'"),
      ])
          .then(function() {
            document.documentElement.className += ' fonts-loaded-2';
            /* Optimization for Repeat Views */
            sessionStorage.fontsLoadedCriticalFoftPreload = true;
          });
      });
  }
})();
