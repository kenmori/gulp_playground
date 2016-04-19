

var gulp = require('gulp');

var config = require('./gulp/config.js');
var watch = require('gulp-watch');



gulp.task('watch', function(){
  gulp.watch(config.scss.src, ['scss'] );
});

gulp.task('scss', function(){

});

gulp.task('default', ['watch', 'scss']);
