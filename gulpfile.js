var gulp = require('gulp');

//inspired from https://github.com/alexweber/es6-jspm-gulp-boilerplate/blob/master/gulpfile.js
var requireDir = require('require-dir');

// Specify paths & globbing patterns for tasks.
global.paths = {
  // HTML sources.
  'html': './app/*.html',
  // JS sources.
  'js': './app/js/**/*.js',
  // SASS sources.
  'sass': './app/**/*.scss',
  // Image sources.
  'img': './app/img/*',
  // Sources folder.
  'app': './app',
  // Compiled CSS folder.
  'css': './app/css',
  // Distribution folder.
  'dist': './dist'
};

// Require all tasks in the 'gulp' folder.
requireDir('./gulp', { recurse: false });

gulp.task('default', function(){
  // run tasks here
  // set up watch handlers here
});
