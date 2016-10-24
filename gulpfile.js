var gulp = require('gulp');
var ts = require('gulp-typescript');
 
var tsProject = ts.createProject('tsconfig.json',{
    outFile: "customutils.js"
});
 
gulp.task('scripts', function() {
    var tsResult = gulp.src(['src/*.ts', 'typings/**/*.ts'])
        .pipe(tsProject())
        .pipe(gulp.dest('dist'));
 
});