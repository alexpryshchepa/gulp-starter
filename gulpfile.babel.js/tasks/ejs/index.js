import gulp from 'gulp';
import path from 'path';
import ejs from 'gulp-ejs';
import rename from 'gulp-rename';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import es from 'event-stream';
import { paths } from '../../config';

export default gulp.task('ejs', (done) => {
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
      .pipe(ejs({}, { root: paths.src }, { ext: '.html' }))
      .pipe(rename(path => {
        if (path.basename === 'main') {
          path.basename = 'index';
        }
      }))
      .pipe(gulp.dest(path.resolve(paths.dist, paths.ejs.dist)));
  };
  
  if (Array.isArray(paths.ejs.src)) {
    const entries = paths.ejs.src.map(path => `${paths.src}/${path}`);
    const tasks = entries.map(entry => task(entry));

    return es.merge(tasks).on('end', done);
  }

  return task(path.resolve(paths.src, paths.ejs.src));
});
