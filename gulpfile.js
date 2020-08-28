//const gulp = require('gulp');
const { src, dest, parallel } = require('gulp');
const terser = require('gulp-terser');
const imagemin = require('gulp-imagemin');


function html() {
   return src('src/*.html').pipe(dest('dist'));
}

function scripts() {
   return src('src/js/script.js')
      .pipe(terser())
      .pipe(dest('dist/js'));
}

function images() {
   return src('src/images/*')
      .pipe(imagemin())
      .pipe(dest('dist/images'));
}

exports.default = parallel(html,scripts, images);