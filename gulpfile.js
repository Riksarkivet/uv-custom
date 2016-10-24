var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('build', function(){
    gulp.src('src/**/*.ts')
    .pipe(ts())
    .pipe(gulp.dest('dist'));
})