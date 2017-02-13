module.exports = class NGF {
    constructor(childProcess, cmd) {
      this._childProcess = childProcess;
      this._cmd = cmd;
    }

    run() {
      this._childProcess.spawn(this._cmd, ['ng-fullstack'], {
        stdio: 'inherit'
      })
    }
}
