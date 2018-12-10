import gulp from 'gulp';
import eslint from 'gulp-eslint';
import eslintIfFixed from 'gulp-eslint-if-fixed';
import yargs from 'yargs';
import { paths } from '../../config';

const flag = yargs.argv;

export default gulp.task('eslint', () => {
  return gulp.src([`${paths.src}/**/*.js`, '!src/libs/**'])
    .pipe(eslint({
      fix: flag.fix,
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(eslintIfFixed(paths.src));
});
