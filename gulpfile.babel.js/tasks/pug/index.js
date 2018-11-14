import gulp from 'gulp';
import path from 'path';
import pug from 'gulp-pug';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import { paths } from '../../config';

export default gulp.task('pug', () => {
  const task = function (src) {
    return gulp.src(src)
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
      .pipe(gulp.dest(path.resolve(paths.dist, paths.pug.dist)));
  };

  if (Array.isArray(paths.pug.src)) {
    const entries = paths.pug.src.map(path => `${paths.src}/${path}`);
    const tasks = entries.map(entry => task(entry));

    return es.merge(tasks).on('end', done);
  }

  return task(path.resolve(paths.src, paths.pug.src));
});
