import gulp from 'gulp';
import path from 'path';
import sassLint from 'gulp-sass-lint';
import {
  paths
} from '../../config';

export default gulp.task('sasslint', () => {
  return gulp.src(path.join(paths.src, '/**/*.s+(a|c)ss'))
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});
