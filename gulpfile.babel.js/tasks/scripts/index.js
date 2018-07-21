import gulp from 'gulp';
import gulpIf from 'gulp-if';
import uglify from 'gulp-uglify';
import sourcemaps from 'gulp-sourcemaps';
import path from 'path';
import browserify from 'browserify';
import browserSync from 'browser-sync';
import notify from 'gulp-notify';
import vinylSourceStream from 'vinyl-source-stream';
import vinylBuffer from 'vinyl-buffer';
import yargs from 'yargs';
import es from 'event-stream';
import {
  paths
} from '../../config';

var flag = yargs.argv;

export default gulp.task('scripts', (done) => {
  const task = function (src, filename) {
    return browserify({
        entries: [src],
        paths: [paths.src],
        debug: !flag.prod,
      })
      .transform('babelify', {
        presets: ['env']
      })
      .bundle()
      .on('error', function (error) {
        notify.onError({
          title: "Gulp error in " + error.plugin,
          message: error.toString()
        })(error);
        this.emit('end');
      })
      .pipe(vinylSourceStream(filename))
      .pipe(vinylBuffer())
      .pipe(sourcemaps.init({
        loadMaps: true,
      }))
      .pipe(gulpIf(flag.prod, uglify()))
      .pipe(gulpIf(!flag.prod, sourcemaps.write()))
      .pipe(gulp.dest(path.resolve(paths.dist, paths.javascripts.dist)))
      .pipe(browserSync.reload({
        stream: true,
      }));
  };

  if (Array.isArray(paths.javascripts.src)) {
    const entries = paths.javascripts.src.map(path => `${paths.src}/${path}`);
    const tasks = entries.map(entry => {
      const arr = entry.split('/');
      const name = arr[arr.length - 1];

      return task(entry, name);
    });

    return es.merge(tasks).on('end', done);
  }

  return task(path.resolve(paths.src, paths.javascripts.src), 'index.js');
});
