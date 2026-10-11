const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/widget.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'widget.js',
    clean: true, // очищать dist перед сборкой
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // ВАЖНО: порядок загрузчиков — справа налево
        use: ['to-string-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // шаблон твоей демо-страницы
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
    hot: true,
  },
};