const isCoverage = process.env.NODE_ENV === 'coverage'
var nodeExternals = require('webpack-node-externals')
const path = require('path')
const config = require('./webpack.config.js')

module.exports = (env, argv = { mode: 'development' }) => {
  const baseConfig = config(env, argv)
  return {
    ...baseConfig,
    output: {
      devtoolModuleFilenameTemplate: '[absolute-resource-path]',
      devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
      rules: [
        isCoverage
          ? {
              test: /\.js/,
              include: path.resolve('web-app'),
              loader: 'istanbul-instrumenter-loader'
            }
          : {},
        ...baseConfig.module.rules
      ]
    },
    target: 'node',
    externals: [nodeExternals()]
  }
}
