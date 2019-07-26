const path = require('path');

module.exports = [
  {
    mode: 'development',
    devtool: 'source-map',
    dest: `${path.resolve(__dirname, 'dist')}/dev`,
  },
  {
    mode: 'production',
    devtool: false,
    dest: `${path.resolve(__dirname, 'dist')}/prod`,
  },
].map(({ mode, devtool, dest }) => ({
  mode,
  devtool,
  entry: './src/main.js',
  output: {
    path: dest,
    filename: 'toggley.js',
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
    ],
  },
}));
