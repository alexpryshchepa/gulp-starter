import gulp from 'gulp';
import browserSync from 'browser-sync';
import {
  paths
}
from '../../config';

export default gulp.task('browser-sync', function () {
  browserSync({
    server: {
      baseDir: paths.dist
    },
    notify: false
  });
});