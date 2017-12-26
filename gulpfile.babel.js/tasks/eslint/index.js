import gulp from 'gulp';
import path from 'path';
import eslint from 'gulp-eslint';
import {
  paths
} from '../../config';

export default gulp.task('eslint', () => {
  return gulp.src([path.join(paths.src, '/**/*.js'), '!src/libs/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
