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
const documentation = require('gulp-documentation');
const Metalsmith = require('metalsmith');
const MetalsmithHTMLMinifier = require('metalsmith-html-minifier');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const _ = require('lodash');


/** --------------------------------------------
* CSS constants.
--------------------------------------------- */

const SCSS_FILES = [
  'documentation/src/scss/**/*',
  'src/scss/**/*',
];
const SCSS_FILE = 'src/scss/styles.scss';
const CSS_DEST = 'dist';
const SCSS_DEMO_FILE = 'documentation/src/scss/styles.scss';
const CSS_DEMO_DEST = 'documentation/public/css';

/** --------------------------------------------
* HTML constants.
--------------------------------------------- */

const HTML_SOURCE_DIR = 'documentation/src/html';
const HTML_BASE_DIR = 'documentation/src/html/base';
const HTML_FILES = [
  'documentation/src/html/**/*',
  'src/react/**/*',
];
const HTML_DEST_DIR = 'documentation/public';

/** --------------------------------------------
* JS constants.
--------------------------------------------- */

const JS_FILES = [
  'src/js/_base/_global.js',
  'src/js/_base/_core.js',
  'src/js/_components/**/*',
];
const JS_DEST = 'dist';
const JS_DEMO_DEST = 'documentation/public/js';

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

gulp.task('html:documentation', (done) => {
  metalsmith().then(() => {
    done();
  }, (err) => {
    // throw err;
    console.log(err); // eslint-disable-line
    done();
  });
});

gulp.task('html:documentation:reload', ['html:documentation'], () => {
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
gulp.task('css:documentation', css.bind(null, 'documentation', SCSS_DEMO_FILE, CSS_DEMO_DEST));

gulp.task('css:documentation:reload', ['css:documentation'], () => gulp.src(SCSS_FILES)
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
gulp.task('js:documentation', js.bind(null, 'verious', JS_DEMO_DEST));

gulp.task('js:vendor', () => {
  gulp.src([
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/jquery/dist/jquery.min.map',
    './node_modules/hammerjs/hammer.min.js',
    './node_modules/hammerjs/hammer.min.js.map',
    './node_modules/lodash/lodash.min.js',
    './node_modules/animejs/anime.min.js',
  ])
    .pipe(gulp.dest(JS_DEMO_DEST));
});

gulp.task('js:documentation:docs', () =>
  gulp.src(JS_FILES)
    .pipe(documentation('md'))
    .pipe(rename('documentation.md'))
    .pipe(gulp.dest('./')) // eslint-disable-line
);

gulp.task('js:documentation:reload', [
  'js:documentation',
  'js:documentation:docs',
  'js:vendor',
], () => {
  gulp.src(JS_FILES)
    .pipe(connect.reload());
});

/** --------------------------------------------
* Live reload.
--------------------------------------------- */

gulp.task('connect', () => {
  connect.server({
    root: 'documentation/public',
    port: 3001,
    livereload: {
      port: 35732,
    },
  });
});

gulp.task('server', [
  'documentation',
  'connect',
  'watch',
]);

/** --------------------------------------------
* Main tasks.
--------------------------------------------- */

gulp.task('default', [
  'css:verious',
  'js:verious',
]);

gulp.task('documentation', [
  'css:documentation',
  'html:documentation',
  'js:documentation',
  'js:documentation:docs',
  'js:vendor',
]);

gulp.task('watch', () => {
  gulp.watch(HTML_FILES, ['html:documentation:reload']);
  gulp.watch(SCSS_FILES, ['css:documentation:reload']);
  gulp.watch(JS_FILES, ['js:documentation:reload']);
});
