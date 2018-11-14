import gulp from 'gulp';

export default gulp.task('deploy', gulp.series('clean', gulp.parallel('ejs', 'sass', 'scripts', 'images'), 'ftp'));
