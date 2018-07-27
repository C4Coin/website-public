module.exports = ({ file, options, env }) => {
  return {
    plugins: {
      autoprefixer: {},
      cssnano: options.mode === 'production' ? {} : false
    }
  }
}
