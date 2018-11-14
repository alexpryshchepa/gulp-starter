import gulp from 'gulp';
import path from 'path';
import ejs from 'gulp-ejs';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import { paths } from '../../config';

export default gulp.task('ejs', () => {
  return gulp.src(path.resolve(paths.src, paths.ejs.src))
    .pipe(plumber({
      errorHandler: function (err) {
        notify.onError({
          title: "Gulp error in " + err.plugin,
          message: err.toString()
        })(err);
        this.emit('end');
      }
    }))
    .pipe(ejs({}, { root: paths.src }, { ext: '.html' }))
    .pipe(gulp.dest(path.resolve(paths.dist, paths.ejs.dist)));
});
