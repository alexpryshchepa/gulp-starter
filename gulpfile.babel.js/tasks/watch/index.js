import gulp from 'gulp';
import browserSync from 'browser-sync';

export default gulp.task('watch', () => {
  gulp.watch('src/**/*.html').on('change', browserSync.reload);
  gulp.watch('src/**/*.pug', gulp.series('pug'));
  gulp.watch('src/**/*.scss', gulp.series('sass'));
  gulp.watch('src/**/*.js', gulp.series('scripts'));
});