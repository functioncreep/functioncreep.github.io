'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

// Sass compilation
gulp.task('sass', function() {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function() {
    gulp.watch('./sass/**/*.scss', ['sass']);
});

// Bulma-specific sass compilation
gulp.task('bulma', function() {
    return gulp.src('./bulma/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./bulma/css'));
});

gulp.task('bulma:watch', function() {
    gulp.watch('./bulma/sass/**/*.scss', ['bulma']);
});


gulp.task('default', ['sass', 'sass:watch', 'bulma', 'bulma:watch']);