import gulp from 'gulp';
import gulpIf from 'gulp-if'
import path from 'path';
import pug from 'gulp-pug';
import browserSync from 'browser-sync';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import yargs from 'yargs';
import {
  paths
} from '../../config';

var flag = yargs.argv;

export default gulp.task('pug', () => {
  return gulp.src(path.resolve(paths.src, paths.pug.src))
    .pipe(plumber({
      errorHandler: function (err) {
        notify.onError({
          title: "Gulp error in " + err.plugin,
          message: err.toString()
        })(err);
        this.emit('end');
      }
    }))
    .pipe(pug())
    .pipe(gulp.dest(path.resolve(paths.dist, paths.pug.dist)))
    .pipe(browserSync.reload({
      stream: true,
    }));
});
