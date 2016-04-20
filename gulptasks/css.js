var config = require('../config');
if(!config.tasks.css) return

var gulp = require('gulp');
var path = require('path');
var sass = require('gulp-sass');

var paths = {
  src: path.join(config.root.src, config.tasks.css.src, '/**/*.{ ' + config.tasks.css.extensions + '}'),
  dest: path.join(config.root.dest, config.tasks.css.dest)
}

var cssTask = function(){
    return gulp.src(paths.src)
    .pipe(sass(config.tasks.css.sass))
    .pipe(gulp.dest(paths.dest))
}

gulp.task('css', cssTask)
module.exports = cssTask
