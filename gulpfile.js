const { series } = require('gulp');

function clean(cb) {
   // Cleans the dest
   cb();
}

function build(cb) {
   // This is the build
   cb();
}

exports.build = build;
exports.default = series(clean, build);