import gulp from 'gulp';
import path from 'path';
import sassLint from 'gulp-sass-lint';
import {
  paths
} from '../../config';

export default gulp.task('sasslint', () => {
  return gulp.src(path.resolve(paths.src, '/**/*.s+(a|c)ss'))
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});
