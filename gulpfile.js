//const gulp = require('gulp');
const { src, dest, parallel } = require('gulp');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const terser = require('gulp-terser');
const imagemin = require('gulp-imagemin');


function html() {
   return src('src/*.html').pipe(dest('dist'));
}

function styles() {
   return src('src/css/**/*.css')
      .pipe(concat('global.css'))
      .pipe(postcss([autoprefixer(), cssnano()]))
      .pipe(dest('dist/css'));
}

function scripts() {
   return src('src/js/**/*.js')
      .pipe(concat('global.js'))
      .pipe(terser())
      .pipe(dest('dist/js'));
}

function images() {
   return src('src/images/*')
      .pipe(imagemin())
      .pipe(dest('dist/images'));
}

exports.default = parallel(html,styles, scripts, images);