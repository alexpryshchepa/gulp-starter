import gulp from 'gulp';
import path from 'path';
import eslint from 'gulp-eslint';
import {
  paths
} from '../../config';

export default gulp.task('eslint', () => {
  return gulp.src([path.join(paths.src, '/**/*.js'), '!src/libs/**'])
    .pipe(eslint({
      rules: {
        'no-alert': 1,
        'no-console': 1,
        'camelcase': 1,
        'curly': 1,
        'no-eq-null': 0,
        'no-empty': 1,
        'no-use-before-define': 0,
        'no-unused-vars': 1,
        'no-extra-semi': 1,
        'no-debugger': 1,
        'semi': 1,
        'quotes': 0,
      }
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
