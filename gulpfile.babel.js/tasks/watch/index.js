import gulp from 'gulp';
import browserSync from 'browser-sync';
import { paths } from '../../config';

export default gulp.task('watch', () => {
//  gulp.watch(`${paths.src}/**/*.pug`, gulp.series('pug')).on('change', browserSync.reload);
  gulp.watch([`${paths.src}/**/*.ejs`, `${paths.src}/**/*.html`], gulp.series('ejs')).on('change', browserSync.reload);
  gulp.watch(`${paths.src}/**/*.scss`, gulp.series('sass')).on('change', browserSync.reload);
  gulp.watch(`${paths.src}/**/*.js`, gulp.series('scripts')).on('change', browserSync.reload);
  gulp.watch(`${paths.src}/images/**/*`, gulp.series('images')).on('change', browserSync.reload);
});
