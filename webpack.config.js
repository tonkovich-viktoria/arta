const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  mode: 'production',
  entry: './src/main.js',

  output: {
    filename: './bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: path.join('images/', '[name][ext]'),
  },

  module: {
    rules: [
        {
            test: /\.html$/i,
            loader: "html-loader",
          },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(jpg|png|svg)$/,
                type: 'asset/resource'
            }
    ],
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
             filename: 'style.css',
           }),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    open: true,
  },

  mode: 'development',
};