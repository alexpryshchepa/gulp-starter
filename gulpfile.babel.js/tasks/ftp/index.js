import gulp from 'gulp'
import path from 'path';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import ftp from 'vinyl-ftp'
import {
  paths,
  ftps,
} from '../../config';

export default gulp.task('ftp', () => {
  const connection = ftp.create({
    host: ftps.host,
    user: ftps.user,
    password: ftps.password
  });

  return gulp.src(path.join(paths.dist, '/**'), {
      base: paths.dist,
      buffer: false
    })
    .pipe(plumber({
      errorHandler: function (err) {
        notify.onError({
          title: "Gulp error in " + err.plugin,
          message: err.toString()
        })(err);
        this.emit('end');
      }
    }))
    .pipe(connection.dest(ftps.folder));
});
