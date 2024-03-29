// Load the required packages
const { src, dest, watch, series, parallel } = require('gulp');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const del = require('del');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();

// Store project paths for easy access
const srcPaths = {
   html: 'src/**/*.html',
   scripts: 'src/assets/scripts/*.js',
   styles: 'src/assets/styles/*.css',
   images: 'src/assets/images/*.{jpg,jpeg,svg,gif,png}'
}

const distPaths = {
   html: 'dist/',
   scripts: 'dist/assets/scripts',
   styles: 'dist/assets/styles',
   images: 'dist/assets/images'
}

/* TASK: HTML
 * Copy .html-files to /dist
 */
function html() {
   return src(srcPaths.html)
      .pipe(dest(distPaths.html))
      .pipe(browserSync.stream());
}

/* TASK: SCRIPTS
 * Concatenate .js-files, minify script and copy to /dist
 */
function scripts() {
   return src(srcPaths.scripts)
      .pipe(concat('main.js'))
      .pipe(terser())
      .pipe(dest(distPaths.scripts))
      .pipe(browserSync.stream());
}

/* TASK: STYLES
 * Contatenate .css-files, add browser prefixes, 
 * minify code and copy to /dist
 */
function styles() {
   return src(srcPaths.styles)
      .pipe(concat('global.css'))
      .pipe(postcss([autoprefixer(), cssnano()]))
      .pipe(dest(distPaths.styles))
      .pipe(browserSync.stream());
}

/* TASK: IMAGES
 * Minify images and copy to /dist
 */
function images() {
   return src(srcPaths.images)
      .pipe(imagemin())
      .pipe(dest(distPaths.images))
      .pipe(browserSync.stream());
}

/* TASK: SERVE
 * Start serving /dist via browserSync, then watch for andy file changes
 */
function serve() {
   browserSync.init({
      server: 'dist/'
   });

   watch(srcPaths.html, { interval: 1000 }, html);
   watch(srcPaths.scripts, { interval: 1000 }, scripts);
   watch(srcPaths.styles, { interval: 1000 }, styles);
   watch(srcPaths.images, { interval: 1000 }, images)
}

/* TASK: CLEAN
 * Delete /dist folder if it exists
 */
function clean() {
   return del(['dist']);
}

// gulp - Default task
exports.default = series(
   clean,
   parallel(html, scripts, styles, images),
   serve
);

// gulp build - Build without serving
exports.build = series(
   clean,
   parallel(html, scripts, styles, images)
);