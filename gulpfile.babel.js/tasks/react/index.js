import gulp from 'gulp';
import path from 'path';
import browserSync from 'browser-sync';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import yargs from 'yargs';
import {
  paths
} from '../../config';

var flag = yargs.argv;

export default gulp.task('react', () => {
  return gulp.src(path.join(paths.src, paths.javascripts.src))
    .pipe(plumber({
      errorHandler: function (err) {
        notify.onError({
          title: "Gulp error in " + err.plugin,
          message: err.toString()
        })(err);
        this.emit('end');
      }
    }))
    .pipe(webpackStream(require('../../../webpack.config.js'), webpack))
    .pipe(gulp.dest(path.join(paths.dist, paths.javascripts.dist)))
    .pipe(browserSync.reload({
      stream: true
    }));
});
