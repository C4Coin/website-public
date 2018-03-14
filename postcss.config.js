module.exports = ({ file, options, env }) => {
  return({
    plugins: {
      'autoprefixer': options.mode == 'production' ? {} : false,
      'cssnano': options.mode == 'production' ? {} : false,
    }
  })
}
