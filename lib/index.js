const {spawn} = require('child_process')
const cmd = /^win/.test(process.platform) ? 'yo.cmd' : 'yo';

let yo = spawn(cmd, ['ng-fullstack'], {
  stdio: 'inherit'
})
