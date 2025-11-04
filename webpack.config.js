const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true
  },
  devServer: {
    static: {
      directory: path.join(__dirname, './'),
    },
    watchFiles: ['index.html', 'assets/**/*'],
    hot: true,
    open: true,
    port: 3000,
    liveReload: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: false
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'assets', to: 'assets' }
      ]
    })
  ],
  mode: 'development'
};
