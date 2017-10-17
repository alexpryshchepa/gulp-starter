import gulp from 'gulp';
import path from 'path';
import sassLint from 'gulp-sass-lint';
import {
  paths
} from '../../config';

export default gulp.task('sasslint', () => {
  return gulp.src(path.join(paths.src, '/**/*.s+(a|c)ss'))
    .pipe(sassLint({
      rules: {
        'no-ids': 1,
        'no-important': 1,
        'indentation': 2,
        'no-vendor-prefixes': 0,
        'no-color-literals': 1,
        'no-extends': 1,
        'no-duplicate-properties': 1,
        'no-transition-all': 1,
      }
    }))
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});
