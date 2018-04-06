var isCoverage = process.env.NODE_ENV === 'coverage'
const config = require('./webpack.config.js')

config.devtool = 'cheap-module-eval-source-map'

module.exports = config
