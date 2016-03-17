/**
 * Created by Mattily on 3/17/2016.
 */

var gulp = require('gulp');
var react = require('gulp-react');

gulp.task('default', function () {
    return gulp.src(['./scripts/*.js', './scripts/**/*.js'])
        .pipe(react())
        .pipe(gulp.dest('./dist'));
});