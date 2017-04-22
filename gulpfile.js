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
const nunjucks = require('nunjucks');
const connect = require('gulp-connect');
const Metalsmith = require('metalsmith');
const MetalsmithLayouts = require('metalsmith-layouts');
const MetalsmithHTMLMinifier = require('metalsmith-html-minifier');
const MetalsmithMapsite = require('metalsmith-mapsite');

const HTML_DEST = 'demo/public';
const HTML_FILES = 'demo/src/html/**/*';
const SCSS_FILES = [
  'demo/src/scss/**/*',
  'src/**/*',
];
const SCSS_FILE = 'src/styles.scss';
const CSS_DEST = 'dist';
const DEMO_SCSS_FILE = 'demo/src/scss/styles.scss';
const DEMO_CSS_DEST = 'demo/public/css';

/** --------------------------------------------
* HTML tasks.
--------------------------------------------- */

const layoutsPath = path.join(__dirname, 'demo/src/html/layouts'); // eslint-disable-line
nunjucks.configure(layoutsPath, { watch: false, noCache: true });

function metalsmith() {
  return new Promise((resolve, reject) => {
    Metalsmith(__dirname)
      .source('./demo/src/html/base')
      .destination(HTML_DEST)
      .clean(false)

      // Layout Plugin
      .use(MetalsmithLayouts({
        directory: layoutsPath,
        engine: 'nunjucks',
      }))

      // HTML Minification Plugin
      .use(MetalsmithHTMLMinifier())

      // Sitemap Plugin
      .use(MetalsmithMapsite('http://frontend.website.com'))

      .build((err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
  });
}

gulp.task('demo:html', (done) => {
  metalsmith().then(() => {
    done();
  }, (err) => {
    throw err;
  });
});

gulp.task('demo:html:reload', ['demo:html'], () => {
  gulp.src(HTML_FILES)
    .pipe(connect.reload());
});

/** --------------------------------------------
* CSS tasks.
--------------------------------------------- */

gulp.task('verious:css', () => {
  gulp.src(SCSS_FILE)
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: [
        path.join(__dirname, 'node_modules'),
      ],
    }).on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(rename({ basename: 'verious', suffix: '.min' }))
    .pipe(gulp.dest(CSS_DEST));
});

gulp.task('demo:css', () => {
  gulp.src(DEMO_SCSS_FILE)
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: [
        path.join(__dirname, 'node_modules'),
      ],
    }).on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(rename({ basename: 'demo', suffix: '.min' }))
    .pipe(gulp.dest(DEMO_CSS_DEST));
});

gulp.task('demo:css:reload', ['demo:css'], () => {
  gulp.src(SCSS_FILES)
    .pipe(connect.reload());
});

/** --------------------------------------------
* Live reload.
--------------------------------------------- */

gulp.task('connect', () => {
  connect.server({
    root: 'demo/public',
    port: 3001,
    livereload: {
      port: 35732,
    },
  });
});

gulp.task('server', [
  'default',
  'connect',
  'watch',
]);

/** --------------------------------------------
* Main tasks.
--------------------------------------------- */

gulp.task('default', [
  'demo:css',
  'demo:html',
]);

gulp.task('watch', () => {
  gulp.watch(HTML_FILES, ['demo:html:reload']);
  gulp.watch(SCSS_FILES, ['demo:css:reload']);
});
