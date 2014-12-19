var gulp = require('gulp');
var exit = require('gulp-exit');
var karma = require('gulp-karma');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var files = {
  dest: '',
  source: 'gac3.js',
  testsFiles: [
    '*.min.js',
    'tests/tests.js'
  ]
};

gulp.task('karma', function () {
  return gulp.src(files.testsFiles)
    .pipe(karma({
      configFile: 'tests/karma.conf.js',
      action: 'run'
    }))
    .on('error', function (err) {
      throw err;
    })
    .pipe(exit());
});

gulp.task('build', function () {
  return gulp.src(files.source)
    .pipe(uglify({ preserveComments: 'some' }))
    .pipe(rename({ suffix: '.min'}))
    .pipe(gulp.dest(files.dest));
});
gulp.task('test', [ 'build', 'karma' ]);
gulp.watch(files.source, [ 'build' ]);
