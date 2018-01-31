import gulp from 'gulp';
import eslint from 'gulp-eslint';
import { paths } from '../../config';

export default gulp.task('eslint', () => {
  return gulp.src([`${paths.src}/**/*.js`, '!src/libs/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
