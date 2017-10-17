import gulp from 'gulp';

export default gulp.task('deploy', gulp.series('clean', gulp.parallel('pug', 'sass', 'scripts', 'images'), 'ftp'));
