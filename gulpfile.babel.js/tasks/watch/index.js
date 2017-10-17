import gulp from 'gulp';
import browserSync from 'browser-sync';

export default gulp.task('watch', () => {
  //gulp.watch('src/**/*.html', gulp.series('html'));
  gulp.watch('src/**/*.pug', gulp.series('pug'));
  gulp.watch('src/**/*.scss', gulp.series('sass'));
  gulp.watch('src/**/*.js', gulp.series('scripts'));
});