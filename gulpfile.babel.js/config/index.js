const tasks = {
  browserSync: true,
  clean: true,
  pug: false, /* Do not include pug task */
  ejs: true,
  sass: true,
  scripts: true,
  images: true,
  move: true,
  ftp: true,
  watch: true,
  sasslint: true,
  eslint: true,
  
  dev: true,
  build: true,
  deploy: true,
  default: true,
};

const paths = {
  src: './src',
  dist: './dist',

//  pug: {
//    src: 'pages/index/index.pug',
//    dist: '',
//  },

  ejs: {
    src: 'pages/index/index.ejs',
    dist: '',
  },

  stylesheets: {
    src: 'pages/index/index.scss', /* ['index.scss', 'test.scss'] - multiple entry points */
    dist: 'assets/css',
  },

  javascripts: {
    src: 'pages/index/index.js', /* ['index.js', 'test.js'] - multiple entry points */
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
  tasks: tasks,
  paths: paths,
  ftps: ftps,
};