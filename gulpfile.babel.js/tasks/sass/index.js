import gulp from 'gulp';
import gulpIf from 'gulp-if';
import path from 'path';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import cssnano from 'gulp-cssnano';
import browserSync from 'browser-sync';
import autoprefixer from 'gulp-autoprefixer';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import yargs from 'yargs';
import {
  paths
} from '../../config';

var flag = yargs.argv;

export default gulp.task('sass', () => {
  return gulp.src(path.resolve(paths.src, paths.stylesheets.src))
    .pipe(plumber({
      errorHandler: function (err) {
        notify.onError({
          title: "Gulp error in " + err.plugin,
          message: err.toString()
        })(err);
        this.emit('end');
      }
    }))
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer(['last 20 versions', '> 0.1%'], {
      cascade: true
    }))
    .pipe(gulpIf(flag.prod, cssnano({
      zIndex: false
    })))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.resolve(paths.dist, paths.stylesheets.dist)))
    .pipe(browserSync.reload({
      stream: true
    }));
});
