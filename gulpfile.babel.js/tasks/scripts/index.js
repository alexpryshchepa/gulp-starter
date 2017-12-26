import gulp from 'gulp';
import gulpIf from 'gulp-if'
import uglify from 'gulp-uglify'
import sourcemaps from 'gulp-sourcemaps';
import path from 'path';
import babelify from 'babelify';
import browserSync from 'browser-sync';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import browserify from 'browserify';
import vinylSourceStream from 'vinyl-source-stream';
import vinylBuffer from 'vinyl-buffer';
import yargs from 'yargs';
import {
  paths
} from '../../config';

var flag = yargs.argv;

export default gulp.task('scripts', () => {
  return browserify({
    entries: path.join(paths.src, paths.javascripts.src),
    paths: [paths.src],
    debug: true,
  })
    .transform('babelify', { presets: ['env'] })
    .bundle()
    .pipe(plumber({
      errorHandler: function (err) {
        notify.onError({
          title: "Gulp error in " + err.plugin,
          message: err.toString()
        })(err);
        this.emit('end');
      }
    }))
    .pipe(vinylSourceStream('index.js'))
    .pipe(vinylBuffer())
    .pipe(sourcemaps.init({
      loadMaps: true
    }))
    .pipe(gulpIf(flag.prod, uglify()))
    .pipe(gulp.dest(path.join(paths.dist, paths.javascripts.dist)))
    .pipe(browserSync.reload({
      stream: true
    }));
});
