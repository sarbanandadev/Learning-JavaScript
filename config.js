SystemJS.config({
  baseURL: './',
  defaultExtension: true,
  packages: {
    ".": {
      main: './main.js',
      defaultExtension: 'js'
    }
  },
  meta: {
    '*.js': {
      'babelOptions': {
        stage1: true
      }
    }
  },
  map: {
    'plugin-babel': 'plugin-babel.js',
    'systemjs-babel-build': 'systemjs-babel-browser.js'
  },
  transpiler: 'plugin-babel'
});

SystemJS.import('./main').catch(console.error.bind(console));