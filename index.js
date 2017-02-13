const NGF = require('./lib')

module.exports = function(opts) {
  new NGF(require('child_process'), /^win/.test(process.platform) ? 'yo.cmd' : 'yo', opts)
}
