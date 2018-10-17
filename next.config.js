const { default: config } = require('nextein/config');

module.exports = config({
  exportPathMap: () => ({
    //'/blog': { page: '/blog' }
  })
})
