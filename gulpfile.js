/** --------------------------------------------
*
* Build file.
*
--------------------------------------------- */

const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

const SCSS_FILE = 'src/styles.scss';
const CSS_DEST = 'dist';
const DEMO_CSS_DEST = 'demo/css';

/** --------------------------------------------
* CSS tasks.
--------------------------------------------- */

gulp.task('css', () => {
  gulp.src(SCSS_FILE)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(rename({ basename: 'verious', suffix: '.min' }))
    .pipe(gulp.dest(CSS_DEST))
    .pipe(gulp.dest(DEMO_CSS_DEST));
});