'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    nodemon = require('gulp-nodemon'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream');

gulp.task('browser-sync', ['nodemon'], function () {
  browserSync.init(null, {
    proxy: 'http://localhost:8769',
    files: [
      'public/**/*.*',
      '!public/**/*.scss',
      '!public/**/*.css.map',
      'src/views/*.pug',
    ],
    port: 8770
  });
});

gulp.task('nodemon', function (callback) {
  var started = false;
  return nodemon({
    script: './bin/www',
    ignore: [
      //'gulpfile.js',
      'bower_components',
      '.idea',
      'node_modules/',
      './public/',
      'notes.js'
    ],
    env: {'NODE_ENV': 'development'}
  }).on('start', function () {
    if (!started) {
      callback();
      started = true;
    }
  });
});

gulp.task('browserify', function () {
  return browserify('./public/dom/gcomponents/source/source.js', {debug: true})
      .bundle()
      .pipe(source('script1.js'))
      .pipe(gulp.dest('./public/dom/gcomponents/'));

});
gulp.task('watchJS', function () {
  return gulp.watch('./public/dom/gcomponents/source/*.js', ['browserify']);
});


gulp.task('default', ['browser-sync']);
