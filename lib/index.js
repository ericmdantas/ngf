const {exec} = require('child_process')
const echo = exec('yo ng-fullstack', (error, stdout, stderr) => {
  console.log(`error: ${error}`)
  console.log(`stdout: ${stdout}`)
  console.log(`stderr: ${stderr}`)
})
