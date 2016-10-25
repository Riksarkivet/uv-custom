var gulp = require('gulp');
var ts = require('gulp-typescript');
var merge = require('merge2');
 
var tsProject = ts.createProject('tsconfig.json',{
    declaration: true
});
 
gulp.task('scripts', function() {
    var tsResult = gulp.src(['src/*.ts', 'typings/**/*.ts'])
        .pipe(tsProject());
 
    return merge([ // Merge the two output streams, so this task is finished when the IO of both operations is done. 
        tsResult.dts.pipe(gulp.dest('dist')),
        tsResult.js.pipe(gulp.dest('dist'))
    ]);        
 
});