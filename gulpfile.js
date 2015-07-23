'use strict';
var connect = require('gulp-connect');
var gulp = require("gulp");

gulp.task('connect', function(){
    connect.server({
        port: 8000,
        livereload: true
    })
})

gulp.task('watch', function(){
    gulp.watch(["./index.html"], ["reload"]);
});

gulp.task('reload', function(){
    gulp.src('./index.html')
        .pipe(connect.reload());
});

gulp.task('dev_build', ["connect", "watch"]);
