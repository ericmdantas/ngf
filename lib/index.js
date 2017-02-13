const util = require('util')

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
      let _action = util.isArray(this._options._) ? this._options._[0] : ""

      switch(_action) {
        case "g":
        case "gen":
        case "generate":
          this._createByType()
          break

        default:
          this._childProcess.spawn(this._cmd, ['ng-fullstack'], this._spawnOptions)
      }
    }

    _createByType() {
      let _type = this._options._[1]
      let _name = this._options._[2]
      let _feat = this._options.ft ||
                  this._options.feat ||
                  this._options.feature

      switch(_type) {
        case "cmp":
        case "component":
          this._childProcess.spawn(this._cmd, ['ng-fullstack:component', _name, '--feature', _feat], this._spawnOptions)
          break

        default:
          throw new TypeError('Type not recognized.')
      }
    }
}
