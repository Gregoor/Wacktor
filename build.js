const fs = require('fs');
const browserify = require('browserify');
const babelify = require('babelify');
const uglifyify = require('uglifyify');

browserify()
  .transform(babelify)
  .transform(uglifyify)
  .require('./src/vector.js', {entry: true})
  .bundle()
  .on('error', err => console.error('Error: ' + err.message))
  .pipe(fs.createWriteStream('./build/bundle.js'));
