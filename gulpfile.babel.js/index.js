import gulp from 'gulp';
import browserSync from 'browser-sync';
import { lstatSync, readdirSync } from 'fs';
import { join, resolve } from 'path';
import { paths } from './config';

const tasksDirectory = 'gulpfile.babel.js/tasks';
const isDirectory = source => lstatSync(source).isDirectory();
const getDirectoriesNames = source => readdirSync(source).map(name => isDirectory(join(source, name)) && name);

getDirectoriesNames(tasksDirectory).forEach(
  taskName => require(resolve(tasksDirectory, taskName))
);

gulp.task('watch', () => {
  //  gulp.watch(`${paths.src}/**/*.pug`, gulp.series('pug')).on('change', browserSync.reload);
  gulp.watch([`${paths.src}/**/*.ejs`, `${paths.src}/**/*.html`], gulp.series('ejs')).on('change', browserSync.reload);
  gulp.watch(`${paths.src}/**/*.scss`, gulp.series('sass')).on('change', browserSync.reload);
  gulp.watch(`${paths.src}/**/*.js`, gulp.series('scripts')).on('change', browserSync.reload);
  gulp.watch(`${paths.src}/images/**/*`, gulp.series('images')).on('change', browserSync.reload);
});

gulp.task('dev', gulp.series('clean', 'ejs', 'sass', 'scripts', 'images', gulp.parallel('browser-sync', 'watch')));
gulp.task('build', gulp.series('clean', gulp.parallel('ejs', 'sass', 'scripts', 'images')));
gulp.task('deploy', gulp.series('clean', gulp.parallel('ejs', 'sass', 'scripts', 'images'), 'ftp'));

gulp.task('default', gulp.series('dev'));
