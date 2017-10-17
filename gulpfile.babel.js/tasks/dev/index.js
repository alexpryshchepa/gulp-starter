import gulp from 'gulp';

export default gulp.task('dev', gulp.series('clean', 'pug', 'sass', 'scripts', 'images', gulp.parallel('browser-sync', 'watch')));
