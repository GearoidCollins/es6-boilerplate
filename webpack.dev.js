const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { address } = require('ip');

const common = require('./webpack.common.js');

const port = 3000;

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './dist',
    host: '0.0.0.0',
    public: `${address()}:${port}`,
    port,
    historyApiFallback: true
  },
  plugins: [new HtmlWebpackPlugin({ template: 'index.html' })]
});
