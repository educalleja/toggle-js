const path = require('path');

module.exports = {
  entry: './src/entrypoint.js',
  output: {
  path: path.resolve(__dirname, 'dist'),
  filename: 'toggley.js'
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
    ]
  }
};