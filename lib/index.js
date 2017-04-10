const util = require('util')

module.exports = class NGF {
    constructor(childProcess, cmd, options) {
      this._childProcess = childProcess
      this._cmd = cmd
      this._options = options
      this._spawnOptions = {
        stdio: 'inherit'
      }

      this._normalizeOptions()
    }

    run() {
      let _action = this._options._[0]

      if (!_action) {
          this._createDefault()
          return
      }

      switch(_action) {
        case "g":
        case "gen":
        case "generate":
          this._createSubGenerator()
          break
      }
    }

    _normalizeOptions() {
      if (!util.isArray(this._options._)) {
        this._options._ = ["", "", ""]
        this._options.feature = ""
      }
    }

    _callYoNgFullstack(params) {
      this._childProcess.spawn(this._cmd, params, this._spawnOptions)
    }

    _createDefault() {
      this._callYoNgFullstack(['ng-fullstack'])
    }

    _createSubGenerator() {
      let _type = this._options._[1]
      let _name = this._options._[2]
      let _feat = this._options.ft ||
                  this._options.feat ||
                  this._options.feature

      if (!_name) {
        throw new TypeError('The name has to be defined.')
      }

      if (!_feat) {
        throw new TypeError('The feature has to be defined.')
      }

      let _typeNormalized = _type.replace(/\[|\]/g,'').split(',').map((t) => t.replace(/\s/g,''))
      let _nameNormalized = _name.replace(/\[|\]/g,'').split(',').map((n) => n.replace(/\s/g,''))

      _typeNormalized = _typeNormalized.length === 1 ? _typeNormalized[0] : _typeNormalized
      _nameNormalized = _nameNormalized.length === 1 ? _nameNormalized[0] : _nameNormalized

      if (!util.isArray(_typeNormalized) && !util.isArray(_nameNormalized)) {
        return this._createBasedOnType(_typeNormalized, _nameNormalized, _feat)
      }

      if (util.isArray(_typeNormalized) && util.isArray(_nameNormalized)) {
        _typeNormalized.forEach((t, index) => {
          this._createBasedOnType(t, _nameNormalized[index], _feat)
        })

        return
      }

      if (!util.isArray(_typeNormalized) && util.isArray(_nameNormalized)) {
        _nameNormalized.forEach((n) => {
          this._createBasedOnType(_typeNormalized, n, _feat)
        })

        return
      }

      if (util.isArray(_typeNormalized) && !util.isArray(_nameNormalized)) {
        _typeNormalized.forEach((t) => {
          this._createBasedOnType(t, _nameNormalized, _feat)
        })

        return
      }
    }

    _createBasedOnType(type, name, feat) {
      switch(type) {
        case "cmp":
        case "component":
          this._callYoNgFullstack(['ng-fullstack:component', name, '--feature', feat])
          break

        case "dct":
        case "directive":
          this._callYoNgFullstack(['ng-fullstack:directive', name, '--feature', feat])
          break

        case "ctrl":
        case "controller":
          this._callYoNgFullstack(['ng-fullstack:controller', name, '--feature', feat])
          break

        case "mde":
        case "model":
          this._callYoNgFullstack(['ng-fullstack:model', name, '--feature', feat])
          break

        case "svc":
        case "service":
          this._callYoNgFullstack(['ng-fullstack:service', name, '--feature', feat])
          break

        case "fct":
        case "factory":
          this._callYoNgFullstack(['ng-fullstack:factory', name, '--feature', feat])
          break

        case "mdu":
        case "module":
          this._callYoNgFullstack(['ng-fullstack:module', name, '--feature', feat])
          break

        case "flt":
        case "filter":
          this._callYoNgFullstack(['ng-fullstack:filter', name, '--feature', feat])
          break

        case "rsc":
        case "resource":
          this._callYoNgFullstack(['ng-fullstack:resource', name, '--feature', feat])
          break


        case "dec":
        case "decorator":
          this._callYoNgFullstack(['ng-fullstack:decorator', name, '--feature', feat])
          break

        case "pp":
        case "pipe":
          this._callYoNgFullstack(['ng-fullstack:pipe', name, '--feature', feat])
          break

        case "stl":
        case "style":
          this._callYoNgFullstack(['ng-fullstack:style', name, '--feature', feat])
          break

        case "vw":
        case "view":
          this._callYoNgFullstack(['ng-fullstack:view', name, '--feature', feat])
          break

        case "edpt":
        case "endpoint":
          this._callYoNgFullstack(['ng-fullstack:endpoint', name, '--feature', feat])
          break

        default:
          throw new Error(`Type not recognized: ${type}.`)
      }
    }
}
