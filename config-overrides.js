const path = require('path')

process.env.GENERATE_SOURCEMAP = 'production' ? false : true

module.exports = function override (config, env) {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.resolve(__dirname, 'src'),
    '@components': path.resolve(__dirname, 'src/components')
  }
  return config
}
