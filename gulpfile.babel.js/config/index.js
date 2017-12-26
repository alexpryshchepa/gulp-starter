const tasks = {
  browserSync: true,
  clean: true,
  html: true,
  pug: true,
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
}

const paths = {
  src: 'src',
  dist: 'dist',

  // Choose html 
  html: {
    src: '*.html',
    dist: '',
  },
  
  // or pug
  pug: {
    src: '*.pug',
    dist: '',
  },

  stylesheets: {
    src: 'index.scss',
    dist: 'assets/css',
  },

  javascripts: {
    src: 'index.js',
    dist: 'assets/js',
  },

  images: {
    src: 'images/**/*',
    dist: 'assets/img',
  }
}

const ftps = {
  host: 'host',
  user: 'user',
  password: 'password',
  folder: 'folder',
}

module.exports = {
  tasks: tasks,
  paths: paths,
  ftps: ftps,
};