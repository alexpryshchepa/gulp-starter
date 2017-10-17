import gulp from 'gulp';
import gulpIf from 'gulp-if';
import image from 'gulp-image'
import path from 'path';
import yargs from 'yargs';
import {
  paths
} from '../../config';

var flag = yargs.argv;

export default gulp.task('images', () => {
  return gulp.src(path.join(paths.src, paths.images.src))
    .pipe(gulpIf(flag.prod, image({
      pngquant: true,
      optipng: false,
      zopflipng: false,
      jpegRecompress: false,
      jpegoptim: true,
      mozjpeg: ['-progressive'],
      gifsicle: true,
      svgo: true,
      concurrent: 10
    })))
    .pipe(gulp.dest(path.join(paths.dist, paths.images.dist)));
});
