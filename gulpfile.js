/** --------------------------------------------
*
* Build file.
*
--------------------------------------------- */

const path = require('path');
const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

const SCSS_FILE = 'src/styles.scss';
const CSS_DEST = 'dist';
const DEMO_SCSS_FILE = 'src/demo.scss';
const DEMO_CSS_DEST = 'demo/css';

/** --------------------------------------------
* CSS tasks.
--------------------------------------------- */

gulp.task('verious:css', () => {
  gulp.src(SCSS_FILE)
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: [
        // path.join(__dirname, 'bower_components'), // bower
        path.join(__dirname, 'node_modules') // npm
      ]
    }).on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(rename({ basename: 'verious', suffix: '.min' }))
    .pipe(gulp.dest(CSS_DEST))
});

gulp.task('demo:css', () => {
  gulp.src(DEMO_SCSS_FILE)
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: [
        // path.join(__dirname, 'bower_components'), // bower
        path.join(__dirname, 'node_modules') // npm
      ]
    }).on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(rename({ basename: 'demo', suffix: '.min' }))
    .pipe(gulp.dest(DEMO_CSS_DEST));
});
