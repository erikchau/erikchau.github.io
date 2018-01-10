const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CopyWebpackPluginConfig = new CopyWebpackPlugin(
  [
    {
      from: './src/static',
      to: "static"
    }
  ]
);
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CleanWebpackPluginConfig = new CleanWebpackPlugin(
  ["dist"]
)

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'], exclude: /node_modules/ },
      { test: /\.css$/, loaders: ['style-loader', 'css-loader'], exclude: /node_modules/ }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    CopyWebpackPluginConfig,
    CleanWebpackPluginConfig
  ]
}
