'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    nodemon = require('gulp-nodemon');

gulp.task('browser-sync', ['nodemon'], function() {
    browserSync.init(null, {
        proxy: 'http://localhost:8769',
        files: [
            './public/**/*.*',
            './src/views/*.pug'
        ],
        port: 8770
    });
});

gulp.task('nodemon', function(callback) {
    var started = false;
    return nodemon({
        script: './bin/www',
        ignore: [
            //'gulpfile.js',
            'node_modules/',
            './public/',
            'notes.js'
        ],
        env: { 'NODE_ENV': 'development' }
    }).on('start', function() {
        if (!started) {
            callback();
            started = true;
        }
    });
});

gulp.task('default', ['browser-sync']);
