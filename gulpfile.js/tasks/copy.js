var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')({
        camelize: true
    }),
    config = require('../../gulpconfig').bower;

gulp.task('copy', function() {
    gulp.src([
            './src/style.css',
            './src/favicon.png',
            './src/favicon.ico',
            './src/screenshot.png'
        ], {
            "base": "./src"
        })
        .pipe(gulp.dest('build'));
});
