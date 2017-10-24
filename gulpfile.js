var gulp = require('gulp'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    uglify = require('gulp-uglify'),
    bytediff = require('gulp-bytediff');

gulp.task('default', function() {
    return gulp.src('source/*.js')
		.pipe(plumber())
			.pipe(bytediff.start())
				.pipe(uglify({mangle: true}))
			.pipe(bytediff.stop())
		.pipe(concat('preloader.min.js', {newLine: ';'}))
		.pipe(plumber.stop())
      	.pipe(gulp.dest('dist/'));
});