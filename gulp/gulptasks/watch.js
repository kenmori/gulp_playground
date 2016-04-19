var config = require('../config.js');
var gulp = require('gulp');
var watch = require('gulp-watch');

var watchTask = function(){
  console.log('watch');
};
gulp.task('watch', watchTask);
module.exports = watchTask;
