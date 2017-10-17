import gulp from 'gulp';

export default gulp.task('build', gulp.series('clean', gulp.parallel('pug', 'sass', 'scripts', 'images')));
