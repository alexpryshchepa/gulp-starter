import gulp from 'gulp';
import path from 'path';
import browserSync from 'browser-sync';
import {
  paths
} from '../../config';

export default gulp.task('watch', () => {
  gulp.watch(path.resolve(paths.src, '**/*.html'), gulp.series('html'));
  gulp.watch(path.resolve(paths.src, '**/*.pug'), gulp.series('pug'));
  gulp.watch(path.resolve(paths.src, '**/*.s(a|c)ss'), gulp.series('sass'));
  gulp.watch(path.resolve(paths.src, '**/*.js'), gulp.series('scripts'));
  gulp.watch(path.resolve(paths.src, 'images/**/*'), gulp.series('images'));
});