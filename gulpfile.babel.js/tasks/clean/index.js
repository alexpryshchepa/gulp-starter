import gulp from 'gulp';
import del from 'del';
import { paths } from '../../config';

export default gulp.task('clean', () => {
  return del(paths.dist);
});
