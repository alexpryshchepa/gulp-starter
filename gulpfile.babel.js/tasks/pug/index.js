import gulp from 'gulp';
import path from 'path';
import pug from 'gulp-pug';
import browserSync from 'browser-sync';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import { paths } from '../../config';

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
