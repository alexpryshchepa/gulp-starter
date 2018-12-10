import gulp from 'gulp';
import scsslint from 'gulp-scss-lint';
import { paths } from '../../config';

export default gulp.task('scsslint', () => {
  return gulp.src(`${paths.src}/**/*.scss`)
    .pipe(scsslint())
    .pipe(scsslint.failReporter('E'));
});
