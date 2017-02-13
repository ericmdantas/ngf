const NGF = require('./lib')
const childProcess = require('child_process')
const cmd = /^win/.test(process.platform) ? 'yo.cmd' : 'yo'

module.exports = function(opts) {
  new NGF(childProcess, cmd, opts).run()
}
