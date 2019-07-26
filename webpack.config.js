const path = require('path');

module.exports = [
  {
    mode: "development",
    devtool: "source-map",
    path: `${path.resolve(__dirname, 'dist')}/dev`
  },
  {
    mode: "production",
    devtool: false,
    path: `${path.resolve(__dirname, 'dist')}/prod`
  },
].map(({ mode, devtool, path }) => ({
  mode,
  devtool,
  entry: './src/main.js',
  output: {
    path,
    filename: 'toggley.js'
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
    ]
  }
}));