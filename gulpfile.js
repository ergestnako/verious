/** --------------------------------------------
*
* Build file.
*
--------------------------------------------- */

require('babel-register');
const path = require('path');
const pump = require('pump');
const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const connect = require('gulp-connect');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const Metalsmith = require('metalsmith');
const MetalsmithHTMLMinifier = require('metalsmith-html-minifier');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const _ = require('lodash');


/** --------------------------------------------
* CSS constants.
--------------------------------------------- */

const SCSS_FILES = [
  'demo/src/scss/**/*',
  'src/scss/**/*',
];
const SCSS_FILE = 'src/scss/styles.scss';
const CSS_DEST = 'dist';
const SCSS_DEMO_FILE = 'demo/src/scss/styles.scss';
const CSS_DEMO_DEST = 'demo/public/css';

/** --------------------------------------------
* HTML constants.
--------------------------------------------- */

const HTML_SOURCE_DIR = 'demo/src/html';
const HTML_BASE_DIR = 'demo/src/html/base';
const HTML_FILES = 'demo/src/html/**/*';
const HTML_DEST_DIR = 'demo/public';

/** --------------------------------------------
* JS constants.
--------------------------------------------- */

const JS_FILES = [
  'src/js/_base/**/*',
  'src/js/_components/**/*',
];
const JS_DEST = 'dist';
const JS_DEMO_DEST = 'demo/public/js';

/** --------------------------------------------
* HTML tasks.
--------------------------------------------- */

function clearCache(cache) {
  _.each(cache, (val, key) => {
    if (key.includes(path.join(__dirname, HTML_SOURCE_DIR))) {
      delete cache[key]; // eslint-disable-line
    }
  });
}

function metalsmith() {
  return new Promise((resolve, reject) => {
    Metalsmith(__dirname)
      .source(HTML_BASE_DIR)
      .destination(HTML_DEST_DIR)
      .clean(false)

      /** --------------------------------------------
      * React plugin.
      --------------------------------------------- */
      .use((files, ms, done) => {
        Object.keys(files).forEach((filepath) => {
          if (path.extname(filepath) === '.jsx') {
            const modulePath = path.join(__dirname, HTML_BASE_DIR, filepath);
            clearCache(require.cache);
            const template = require(modulePath); // eslint-disable-line
            const reactClass = template.default || template;
            const Factory = React.createFactory(reactClass);
            const component = new Factory({
              file: files[filepath],
            });

            const contents = ReactDOMServer.renderToStaticMarkup(component);

            const data = files[filepath];
            const dirName = path.dirname(filepath);
            let htmlName = `${path.basename(filepath, path.extname(filepath))}.html`;

            if (dirName !== '.') {
              htmlName = `${dirName}/${htmlName}`;
            }

            data.contents = contents;

            delete files[filepath]; // eslint-disable-line
            files[htmlName] = data; // eslint-disable-line
          }
        });
        done();
      })

      /** --------------------------------------------
      * Minification plugin.
      --------------------------------------------- */
      .use(MetalsmithHTMLMinifier())

      .build((err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
  });
}

gulp.task('html:demo', (done) => {
  metalsmith().then(() => {
    done();
  }, (err) => {
    // throw err;
    console.log(err); // eslint-disable-line
    done();
  });
});

gulp.task('html:demo:reload', ['html:demo'], () => {
  gulp.src(HTML_FILES)
    .pipe(connect.reload());
});

/** --------------------------------------------
* CSS tasks.
--------------------------------------------- */

const css = (basename, src, dest) => gulp.src(src)
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: [
        path.join(__dirname, 'node_modules'),
      ],
    }).on('error', sass.logError))
    .pipe(rename({ basename, suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(dest));

gulp.task('css:verious', css.bind(null, 'verious', SCSS_FILE, CSS_DEST));
gulp.task('css:demo', css.bind(null, 'demo', SCSS_DEMO_FILE, CSS_DEMO_DEST));

gulp.task('css:demo:reload', ['css:demo'], () => gulp.src(SCSS_FILES)
    .pipe(connect.reload()));

/** --------------------------------------------
* JS tasks.
--------------------------------------------- */

const js = (basename, dest, cb) => {
  pump([
    gulp.src(JS_FILES),
    sourcemaps.init(),
    babel({
      presets: ['latest'],
      minified: true,
      comments: false,
    }),
    concat('verious.js'),
    rename({ basename, suffix: '.min', extname: '.js' }),
    sourcemaps.write('.'),
    gulp.dest(dest),
  ], cb);
};

gulp.task('js:verious', js.bind(null, 'verious', JS_DEST));
gulp.task('js:demo', js.bind(null, 'verious', JS_DEMO_DEST));

gulp.task('js:vendor', () => {
  gulp.src([
    // './node_modules/jquery/dist/jquery.min.js',
    // './node_modules/jquery/dist/jquery.min.map',
  ])
    .pipe(gulp.dest(JS_DEMO_DEST));
});

gulp.task('js:demo:reload', ['js:demo', 'js:vendor'], () => {
  gulp.src(JS_FILES)
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
  'css:demo',
  'html:demo',
  'js:demo',
]);

gulp.task('watch', () => {
  gulp.watch(HTML_FILES, ['html:demo:reload']);
  gulp.watch(SCSS_FILES, ['css:demo:reload']);
  gulp.watch(JS_FILES, ['js:demo:reload']);
});
