import gulp from 'gulp';

export default gulp.task('dev', gulp.series('clean', 'ejs', 'sass', 'scripts', 'images', gulp.parallel('browser-sync', 'watch')));
