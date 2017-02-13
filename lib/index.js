module.exports = class NGF {
    constructor(childProcess, cmd) {
      this._childProcess = childProcess;
      this._cmd = cmd;
      this._spawnOptions = {
        stdio: 'inherit'
      }
    }

    init() {
      this._childProcess.spawn(this._cmd, ['ng-fullstack'], this._spawnOptions)
    }
}
