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
          this._callYoNgFullstack(['ng-fullstack'])
      }
    }

    _callYoNgFullstack(params) {
      this._childProcess.spawn(this._cmd, params, this._spawnOptions)
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
          this._callYoNgFullstack(['ng-fullstack:component', _name, '--feature', _feat])
          break

        case "dct":
        case "directive":
          this._callYoNgFullstack(['ng-fullstack:directive', _name, '--feature', _feat])
          break

        case "ctrl":
        case "controller":
          this._callYoNgFullstack(['ng-fullstack:controller', _name, '--feature', _feat])
          break

        case "mde":
        case "model":
          this._callYoNgFullstack(['ng-fullstack:model', _name, '--feature', _feat])
          break

        case "svc":
        case "service":
          this._callYoNgFullstack(['ng-fullstack:service', _name, '--feature', _feat])
          break

        case "fct":
        case "factory":
          this._callYoNgFullstack(['ng-fullstack:factory', _name, '--feature', _feat])
          break

        case "mdu":
        case "module":
          this._callYoNgFullstack(['ng-fullstack:module', _name, '--feature', _feat])
          break

        case "flt":
        case "filter":
          this._callYoNgFullstack(['ng-fullstack:filter', _name, '--feature', _feat])
          break

        case "rsc":
        case "resource":
          this._callYoNgFullstack(['ng-fullstack:resource', _name, '--feature', _feat])
          break

        case "pipe":
        case "pp":
          this._callYoNgFullstack(['ng-fullstack:pipe', _name, '--feature', _feat])
          break

        case "stl":
        case "style":
          this._callYoNgFullstack(['ng-fullstack:style', _name, '--feature', _feat])
          break

        case "view":
        case "vw":
          this._callYoNgFullstack(['ng-fullstack:view', _name, '--feature', _feat])
          break

        case "edpt":
        case "endpoint":
          this._callYoNgFullstack(['ng-fullstack:endpoint', _name, '--feature', _feat])
          break

        default:
          throw new Error('Type not recognized.')
      }
    }
}
