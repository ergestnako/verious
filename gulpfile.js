/** --------------------------------------------
*
* Build file.
*
--------------------------------------------- */

const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const connect = require('gulp-connect');
const handlebars = require('handlebars');
const Metalsmith = require('metalsmith');
const MetalsmithInPlace = require('metalsmith-in-place');
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

const layoutsPath = path.join(__dirname, 'demo/src/html/layouts');
const includesPath = path.join(__dirname, 'demo/src/html/includes');

function metalsmith() {
  return new Promise((resolve, reject) => {
    Metalsmith(__dirname)
      .source('./demo/src/html/base')
      .destination(HTML_DEST)
      .clean(false)

      .metadata({

      })

      // Includes plugin.
      .use((files, ms, done) => {
        const includes = {};

        const items = fs.readdirSync(includesPath);

        for (let i = 0; i < items.length; i += 1) {
          const name = items[i];
          const root = name.split('.')[0];
          const data = fs.readFileSync(path.join(includesPath, name), 'utf-8');
          includes[root] = data;
        }

        _.each(files, (file) => {
          file.includes = {}; // eslint-disable-line
          _.each(includes, (include, key) => {
            const template = handlebars.compile(include);
            const rendered = template(file);
            file.includes[key] = rendered; // eslint-disable-line
          });
        });

        done();
      })

      // Layout plugin.
      .use(MetalsmithLayouts({
        directory: layoutsPath,
        partials: 'demo/src/html/layouts/partials',
        engine: 'handlebars',
      }))

      // In Place plugin.
      .use(MetalsmithInPlace())

      // HTML Minification Plugin.
      .use(MetalsmithHTMLMinifier())

      // Sitemap plugin.
      .use(MetalsmithMapsite('http://frontend.website.com'))

      // // Print metadata.
      // .use(function(files, metalsmith, done) {
      //   console.log(files);
      //   console.log(metalsmith);
      //   done();
      // })

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
