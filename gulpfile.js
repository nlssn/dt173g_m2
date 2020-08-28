const gulp = require('gulp');
const { src, dest, parallel } = require('gulp');
const terser = require('gulp-terser');


function html() {
   return src('src/*.html').pipe(dest('dist'));
}

function scripts() {
   return src('src/js/script.js')
      .pipe(terser())
      .pipe(dest('dist/js'));
}

exports.default = parallel(html,scripts);