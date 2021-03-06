'use strict';

var gulp 		= require('gulp'),
browserSync = require('browser-sync').create(),
sass 		= require('gulp-sass'),
uglify 		= require('gulp-uglify'),
watch 		= require('gulp-watch'),
notify         = require('gulp-notify'),
sourcemaps = require('gulp-sourcemaps'),
autoprefixer = require('gulp-autoprefixer');

// Static Server + watching scss/js/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: {
        	baseDir: "./"
        }
    });

    gulp.watch("./sass/*.scss", ['sass']);
    gulp.watch("js/*.js", ['js-watch']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

// sass to css conversion
gulp.task('sass', function() {
	return gulp.src('./sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'expand'}).on("error", notify.onError()))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['> 5%'],
        cascade: false
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
});

// js uglify/minify
gulp.task('js', function () {
    return gulp.src('js/*js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

// reloading browsers
gulp.task('js-watch', ['js'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('default', ['serve']);