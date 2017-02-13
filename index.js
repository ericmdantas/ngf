const cmd = /^win/.test(process.platform) ? 'yo.cmd' : 'yo'

require('./lib')(require('child_process'), cmd)
