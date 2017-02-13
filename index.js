require('./lib')(
  require('child_process'),
  /^win/.test(process.platform) ? 'yo.cmd' : 'yo'
)
