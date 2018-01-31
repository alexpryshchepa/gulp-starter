import gulp from 'gulp';
import { paths } from '../../config';

export default gulp.task('watch', () => {
  gulp.watch(`${paths.src}/**/*.html`, gulp.series('html'));
  gulp.watch(`${paths.src}/**/*.pug`, gulp.series('pug'));
  gulp.watch(`${paths.src}/**/*.scss`, gulp.series('sass'));
  gulp.watch(`${paths.src}/**/*.js`, gulp.series('scripts'));
  gulp.watch(`${paths.src}/images/**/*`, gulp.series('images'));
});
