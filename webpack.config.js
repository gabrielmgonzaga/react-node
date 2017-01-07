const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    app: './public/app/App.js'
  },
  output: {
    filename: './public/build/bundle.js',
    sourceMapFileName: './public/build/bundle.map'
  },
  devtool: '#source-map',
  module: {
    loaders: [
      {
        loader: 'babel',
        exclude: /(node_modules)/,
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}
