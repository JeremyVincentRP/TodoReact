var path = require('path')
var webpack = require('webpack')

var PureScriptWebpackPlugin = require('purescript-webpack-plugin')

var src = ['bower_components/purescript-*/src/**/*.purs', 'src/**/*.purs']
var ffi = ['bower_components/purescript-*/src/**/*.js', 'src/**/*FFI.js']

var modulesDirectories = [
    'node_modules',
    'bower_components'
]

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new PureScriptWebpackPlugin({src: src, ffi: ffi})
  ],
  resolve: {
    modulesDirectories: modulesDirectories,
    extensions: [ '', '.js', '.purs']
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      loader: 'babel',
      exclude: /node_modules/,
      include: __dirname,
      query: {
        presets: ['es2015', 'react', 'stage-0']
      }
    }, {
      test: /\.less$/,
      loader: 'style!css!autoprefixer!less'
    }, {
      test: /\.purs$/,
      loader: 'purs-loader'
    }]
  }
}
