// const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

process.traceDeprecation = true

module.exports = (env, argv) => {
  const { mode } = argv
  return {
    context: path.resolve('./web-app'),
    entry: ['babel-polyfill', './index.js'],
    resolve: {
      modules: [
        path.resolve('./web-app'),
        path.resolve('./node_modules'),
        path.resolve('./base')
      ]
    },
    plugins: [
      new HtmlWebpackPlugin(
        Object.assign(
          {
            template: path.resolve('./base/index.ejs')
          },
          require('./base/base.config.js')
        )
      )
    ],
    module: {
      rules: [
        {
          test: /\.ejs$/,
          use: [
            {
              loader: 'ejs-loader'
            }
          ]
        },
        {
          test: /\.(js|jsx)$/,
          exclude: path.resolve('./node_modules'),
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['env', 'react', 'stage-0'],
                plugins: ['transform-object-assign']
              }
            }
          ]
        },
        {
          test: /\.(png|jpg|complex\.svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'images/[name].[ext]'
              }
            }
          ]
        },
        {
          test: /\.svg$/,
          exclude: /\.complex\.svg/,
          use: [
            {
              loader: 'babel-loader'
            },
            {
              loader: 'react-svg-loader'
            }
          ]
        },
        {
          test: /\.(ttf|otf|eot|woff|woff2)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'fonts/[name].[ext]'
              }
            }
          ]
        },
        {
          test: /\.variables\.scss$/,
          use: [
            {
              loader: 'sass-extract-loader',
              options: {
                plugins: ['minimal']
              }
            }
          ]
        },
        {
          test: /\.scss$/,
          exclude: /\.variables\.scss$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
                modules: true,
                localIdentName:
                  mode === 'production' ? '[hash:base64:5]' : '[path][local]'
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                config: {
                  ctx: {
                    mode: mode
                  }
                }
              }
            },
            'sass-loader'
          ]
        }
      ]
    }
  }
}
