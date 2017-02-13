module.exports = class NGF {
    constructor(childProcess, cmd, options) {
      this._childProcess = childProcess;
      this._cmd = cmd;
      this._options = options;
      this._spawnOptions = {
        stdio: 'inherit'
      }
    }

    run() {
      this._childProcess.spawn(this._cmd, ['ng-fullstack'], this._spawnOptions)
    }
}
