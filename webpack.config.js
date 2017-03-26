const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: [
      'webpack-dev-server/client?http://0.0.0.0:8081',
      'webpack/hot/only-dev-server',
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
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
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
    ]
};
