var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');


var config = {
    scssTarget: ['./src/assets/**/*.scss', '!./src/assets/published/']
};

gulp.task('watch', function(){
  gulp.watch('src/assets/styles/**.scss', ['scss'] );
});

gulp.task('scss', function(){
    gulp.src(config.scssTarget)
    .pipe(sass())
    .pipe(gulp.dist('dist/assets/'));
});

gulp.task('default', ['scss']);
