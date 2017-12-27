/* eslint-disable no-unused-vars */

import gulp from 'gulp';
import path from 'path';
import { paths } from '../../config';

export default gulp.task('move', (done) => {
  let file1 = gulp.src(path.resolve(paths.src, '/file1'))
    .pipe(gulp.dest(paths.dist));

  let file2 = gulp.src(path.resolve(paths.src, '/file2'))
    .pipe(gulp.dest(paths.dist));

  let file3 = gulp.src(path.resolve(paths.src, '/file3'))
    .pipe(gulp.dest(paths.dist));

  done();
});
