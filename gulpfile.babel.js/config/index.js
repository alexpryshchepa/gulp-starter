const paths = {
  src: './src',
  dist: './dist',

//  pug: {
//    src: 'pages/index/index.pug',
//    dist: '',
//  },

  ejs: {
    /* ['pages/index/index.ejs', 'pages/index/about.ejs'] - multiple entry points */
    src: 'pages/index/index.ejs',
    dist: '',
  },

  stylesheets: {
    /* ['pages/index/index.scss', 'pages/index/about.scss'] - multiple entry points */
    src: 'pages/index/index.scss',
    dist: 'assets/css',
  },

  javascripts: {
    /* ['pages/index/index.js', 'pages/index/about.js'] - multiple entry points */
    src: 'pages/index/index.js',
    dist: 'assets/js',
  },

  images: {
    src: 'images/**/*',
    dist: 'assets/img',
  }
};

const ftps = {
  host: 'host',
  user: 'user',
  password: 'password',
  folder: 'folder',
};

module.exports = {
  paths,
  ftps,
};