const paths = {
  src: './src',
  dist: './dist',

//  pug: {
//    src: 'pages/main/main.pug',
//    dist: '',
//  },

//  ejs: {
//    /* ['pages/index/index.ejs', 'pages/index/about.ejs'] - multiple entry points */
//    src: 'pages/main/main.ejs',
//    dist: '',
//  },

  nunjucks: {
    /* ['pages/index/index.html', 'pages/index/about.html'] - multiple entry points */
    src: 'pages/main/main.njk',
    dist: '',
  },

  stylesheets: {
    /* ['pages/index/index.scss', 'pages/index/about.scss'] - multiple entry points */
    src: 'index.scss',
    dist: 'assets/css',
  },

  javascripts: {
    /* ['pages/index/index.js', 'pages/index/about.js'] - multiple entry points */
    src: 'index.js',
    dist: 'assets/js',
  },

  images: {
    src: 'images/**/*',
    dist: 'assets/img',
  },
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
