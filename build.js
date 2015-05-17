import fs from 'fs';
import browserify from 'browserify';
import babelify from 'babelify';
import uglifyify from 'uglifyify';

browserify()
  .transform(babelify)
  .transform(uglifyify)
  .require('./src/vector.js', {entry: true})
  .bundle()
  .on('error', err => console.error('Error: ' + err.message))
  .pipe(fs.createWriteStream('./build/bundle.js'));
