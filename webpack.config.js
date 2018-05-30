const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Uglify = require("uglifyjs-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

// FIXME: prefixes are not added in development mode? maybe this is fine

const DEV = process.env.NODE_ENV.trim() !== 'production'

const config = {
  entry: [
    'react-hot-loader/patch',
    './src/index.js'
  ],
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/projects/cubedoc',
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
          ['style-loader', 'css-loader', 'postcss-loader'] :
          ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'postcss-loader']
          })
      },
      {
        test: /\.scss$/,
        use: DEV ?
          ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'] :
          ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'postcss-loader', 'sass-loader']
          })
      },
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
			{
				test: /\.(jpe?g|png|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: '/img/[name].[ext]'
				}
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
    new ExtractTextPlugin('style.css'),
    new Uglify()
  ]
};

if (!DEV) config.plugins.push(new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('production')
}))

module.exports = config;
