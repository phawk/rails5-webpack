const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: [
      'webpack-dev-server/client?http://0.0.0.0:8080',
      './src/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: '[name].[hash].js'
    },
    resolve: {
      extensions: [ '.js', '.scss' ],
      modules: [
        path.resolve(__dirname, 'src'),
        path.resolve(__dirname, 'styles'),
        path.resolve(__dirname, 'node_modules')
      ],
      alias: {
        'styles': path.resolve(__dirname, 'styles'),
        'src': path.resolve(__dirname, 'src')
      }
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          loaders: ["babel-loader"]
        },
        {
          test: /\.scss$/,
          loaders: ["style-loader", "css-loader", "sass-loader"]
        },
        {
          test: /\.css$/,
          loaders: ["style-loader", "css-loader"]
        },
        // {
        //   test: /\.(png|jpg|jpeg|gif)$/,
        //   loader: 'url-loader?prefix=img/&limit=5000'
        // },
        // {
        //   test: /\.(ttf|eot|svg)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        //   loader: 'file-loader'
        // },
      ]
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
        options: {
          sassLoader: {
            includePaths: [path.resolve(__dirname, "./styles")]
          }
        }
      }),
      new HtmlWebpackPlugin({
        inject: 'body',
        template: path.resolve(__dirname, 'src/index.html')
      }),
      new CopyWebpackPlugin([{
        from: path.resolve(__dirname, 'src/assets/*'),
        to: path.resolve(__dirname, 'dist/assets/[name].[ext]')
      }]),
    ]
};
