import gulp from 'gulp';
import path from 'path';
import {
  paths
} from '../../config';

export default gulp.task('move', (done) => {
  const file1 = gulp.src(path.resolve(paths.src, '/file1'))
    .pipe(gulp.dest(paths.dist))

  const file2 = gulp.src(path.resolve(paths.src, '/file2'))
    .pipe(gulp.dest(paths.dist))

  const file3 = gulp.src(path.resolve(paths.src, '/file3'))
    .pipe(gulp.dest(paths.dist))

  done();
});
