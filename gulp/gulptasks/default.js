var gulp = require('gulp');
var gulpSequence = require('gulp-sequence');

var defaultTask = function(cd){
  var tasks = 'watch';
  gulpSequence('watch', cd);
};
gulp.task('default', defaultTask);
module.export = defaultTask;
