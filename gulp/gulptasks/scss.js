var gulp = require('gulp');
gulp.task('scss', function(){
  var config = require('../config.js').scss;
  var sass = require('gulp-sass');
  gulp.src(config.scss.src)
  .pipe(sass())
  .pipe(gulp.dest(config.scss.dest));
});
