const { src, dest, series, parallel, watch } = require('gulp');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const terser = require('gulp-terser');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();

const htmlPath = 'src/*html';
const stylesPath = 'src/css/**/*.css';
const scriptsPath = 'src/js/**/*.js';
const imagesPath = 'src/images/*';

function html() {
   return src(htmlPath)
      .pipe(dest('dist'));
}

function styles() {
   return src(stylesPath)
      .pipe(concat('global.css'))
      .pipe(postcss([autoprefixer(), cssnano()]))
      .pipe(dest('dist/css'))
      .pipe(browserSync.stream());
}

function scripts() {
   return src(scriptsPath)
      .pipe(concat('global.js'))
      .pipe(terser())
      .pipe(dest('dist/js'))
      .pipe(browserSync.stream());
}

function images() {
   return src(imagesPath)
      .pipe(imagemin())
      .pipe(dest('dist/images'))
      .pipe(browserSync.stream());
}

function serve() {
   browserSync.init({
      server: 'dist/'
   });
   
   watch([htmlPath], { intervall: 1000 }, series(html, browserSync.reload));
   watch([stylesPath], { intervall: 1000 }, styles);
   watch([scriptsPath], {intervall: 1000 }, scripts);
   watch([imagesPath], {intervall: 1000 }, images);
}

exports.default = series(parallel(html,styles, scripts, images), serve);