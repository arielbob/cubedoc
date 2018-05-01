const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Uglify = require("uglifyjs-webpack-plugin");

//TODO: add uglify to minify and clean up dead code
//TODO: add production/dev env checking to disable sourcemaps and other things that i don't know yet
//TODO: add postcss-loader for autoprefixing in css files

const DEV = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/index.js'
  ],
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: DEV ?
          ['style-loader', 'css-loader'] :
          ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader'
          })
      },
      {
        test: /\.scss$/,
        use: DEV ?
          ['style-loader', 'css-loader', 'sass-loader'] :
          ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
      },
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new ExtractTextPlugin('styles.css'),
    new Uglify()
  ]
};
