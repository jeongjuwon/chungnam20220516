const path = require('path');

module.exports = {
  entry: './src/index.js',
  watch: true,
  output: {
    // /Users/hanalabs/Documents/workspace/education/chungnam/day01/webpack/dist/bundle.js
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};