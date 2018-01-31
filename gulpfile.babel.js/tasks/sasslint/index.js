import gulp from 'gulp';
import sassLint from 'gulp-sass-lint';
import { paths } from '../../config';

export default gulp.task('sasslint', () => {
  return gulp.src(`${paths.src}/**/*.scss`)
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
});
