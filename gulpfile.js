// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

const sassFileLoc = './css/custom.scss';

gulp.task('sass', function (cb) {
  gulp
    .src(sassFileLoc)
    .pipe(sass())
    .pipe(
      gulp.dest(function (f) {
        return f.base;
      })
    );
  cb();
});

gulp.task(
  'default',
  gulp.series('sass', function (cb) {
    gulp.watch(sassFileLoc, gulp.series('sass'));
    cb();
  })
);