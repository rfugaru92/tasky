var gulp = require('gulp');
var connect = require('gulp-connect');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('connect', function() {
  connect.server({
    base: 'http://localhost',
    port: 9000,
    root: './dist',
    livereload: true
  });
});

gulp.task('js', function() {
  browserify('./app/main.js')
    .transform(babelify,{presets:['es2015']})
    .bundle()
    .pipe(source('bundle.js')) //bundle code into bundle.js
    .pipe(gulp.dest('./dist/scripts')) //save it to dist/scripts/
    .pipe(connect.reload()); //reload the browser
});

gulp.task('html', function() {
  gulp.src('./app/*.html')
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload());
});

gulp.task('watch',function() {
  gulp.watch('./app/**/*.js', ['js']);
  gulp.watch('./app/*.html', ['html']);
})


gulp.task('default', ['js', 'html', 'connect', 'watch'], function(){

});
