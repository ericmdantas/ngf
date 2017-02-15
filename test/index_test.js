const {expect} = require('chai')
const sinon = require('sinon')
const proxyquire = require('proxyquire')
const childProcess = require('child_process')
const NGF = require('../lib')

describe('index', () => {
  describe('instance', () => {
    it('should have the right props set correctly', () => {
      let ngf = new NGF(childProcess, 'wat', {a: true})

      expect(ngf._childProcess).to.equal(childProcess)
      expect(ngf._cmd).to.equal('wat')
      expect(ngf._options.a).to.be.true
    })
  })

  describe('run', () => {
    describe('initial app creation', () => {
      it('should call the spawn with the right params', () => {
        let ngf = new NGF(childProcess, 'wat', {a: true})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })

      it('should add some empty info in the _ array and .feature prop', () => {
        let ngf = new NGF(childProcess, 'wat', {a: true})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        expect(ngf._options._[0]).to.equal("")
        expect(ngf._options._[1]).to.equal("")
        expect(ngf._options._[2]).to.equal("")
        expect(ngf._options.feature).to.equal("")

        ngf._childProcess.spawn.restore()
      })
    })

    describe('not enough info informed', () => {
      it('not informed name', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'unknown_type', ''], ft: 'lib'})

        expect(() => ngf.run()).to.throw(Error, /^The name has to be defined/)
      })

      it('not informed feature - ft', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'unknown_type', 'some_name'], ft: ''})

        expect(() => ngf.run()).to.throw(Error, /^The feature has to be defined/)
      })

      it('not informed feature - feat', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'unknown_type', 'some_name'], feat: ''})

        expect(() => ngf.run()).to.throw(Error, /^The feature has to be defined/)
      })

      it('not informed feature - feature', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'unknown_type', 'some_name'], feature: ''})

        expect(() => ngf.run()).to.throw(Error, /^The feature has to be defined/)
      })

      it('unrecognized type', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'unknown_type', 'mything'], ft: 'lib'})

        expect(() => ngf.run()).to.throw(Error, /^Type not recognized/)
      })
    })

    describe('creation with g, gen and generate', () => {
      it('should call the spawn with the right params - g', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'cmp', 'mything'], ft: 'lib'})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack:component', 'mything', '--feature', 'lib'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })

      it('should call the spawn with the right params - gen', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['gen', 'cmp', 'mything'], ft: 'lib'})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack:component', 'mything', '--feature', 'lib'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })

      it('should call the spawn with the right params - generate', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['generate', 'cmp', 'mything'], ft: 'lib'})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack:component', 'mything', '--feature', 'lib'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })
    })

    describe('component creation', () => {
      it('should call the spawn with the right params - cmp - ft', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'cmp', 'mything'], ft: 'lib'})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack:component', 'mything', '--feature', 'lib'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })

      it('should call the spawn with the right params - component - ft', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'component', 'mything'], ft: 'lib'})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack:component', 'mything', '--feature', 'lib'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })

      it('should call the spawn with the right params - component - feat', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'component', 'mything'], feat: 'lib'})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack:component', 'mything', '--feature', 'lib'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })

      it('should call the spawn with the right params - component - feature', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'component', 'mything'], feature: 'lib'})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack:component', 'mything', '--feature', 'lib'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })
    })

    describe('directive creation', () => {
      it('should call the spawn with the right params - dct - ft', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'dct', 'mything'], ft: 'lib'})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack:directive', 'mything', '--feature', 'lib'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })

      it('should call the spawn with the right params - directive - ft', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'directive', 'mything'], ft: 'lib'})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack:directive', 'mything', '--feature', 'lib'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })

      it('should call the spawn with the right params - directive - feat', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'directive', 'mything'], feat: 'lib'})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack:directive', 'mything', '--feature', 'lib'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })

      it('should call the spawn with the right params - directive - feature', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'directive', 'mything'], feature: 'lib'})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack:directive', 'mything', '--feature', 'lib'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })
    })

    describe('controller creation', () => {
      it('should call the spawn with the right params - ctrl - ft', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'ctrl', 'mything'], ft: 'lib'})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack:controller', 'mything', '--feature', 'lib'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })

      it('should call the spawn with the right params - controller - ft', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'controller', 'mything'], ft: 'lib'})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack:controller', 'mything', '--feature', 'lib'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })

      it('should call the spawn with the right params - controller - feat', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'controller', 'mything'], feat: 'lib'})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack:controller', 'mything', '--feature', 'lib'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })

      it('should call the spawn with the right params - directive - feature', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'controller', 'mything'], feature: 'lib'})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack:controller', 'mything', '--feature', 'lib'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })
    })

    describe('model creation', () => {
      it('should call the spawn with the right params - mde - ft', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'mde', 'mything'], ft: 'lib'})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack:model', 'mything', '--feature', 'lib'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })

      it('should call the spawn with the right params - model - ft', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'model', 'mything'], ft: 'lib'})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack:model', 'mything', '--feature', 'lib'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })

      it('should call the spawn with the right params - model - feat', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'model', 'mything'], feat: 'lib'})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack:model', 'mything', '--feature', 'lib'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })

      it('should call the spawn with the right params - model - feature', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'model', 'mything'], feature: 'lib'})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack:model', 'mything', '--feature', 'lib'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })
    })

    describe('service creation', () => {
      it('should call the spawn with the right params - svc - ft', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'svc', 'mything'], ft: 'lib'})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack:service', 'mything', '--feature', 'lib'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })

      it('should call the spawn with the right params - service - ft', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'service', 'mything'], ft: 'lib'})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack:service', 'mything', '--feature', 'lib'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })

      it('should call the spawn with the right params - service - feat', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'service', 'mything'], feat: 'lib'})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack:service', 'mything', '--feature', 'lib'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })

      it('should call the spawn with the right params - service - feature', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'service', 'mything'], feature: 'lib'})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack:service', 'mything', '--feature', 'lib'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })
    })

    describe('factory creation', () => {
      it('should call the spawn with the right params - fct - ft', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'fct', 'mything'], ft: 'lib'})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack:factory', 'mything', '--feature', 'lib'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })

      it('should call the spawn with the right params - factory - ft', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'factory', 'mything'], ft: 'lib'})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack:factory', 'mything', '--feature', 'lib'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })

      it('should call the spawn with the right params - factory - feat', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'factory', 'mything'], feat: 'lib'})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack:factory', 'mything', '--feature', 'lib'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })

      it('should call the spawn with the right params - factory - feature', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'factory', 'mything'], feature: 'lib'})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack:factory', 'mything', '--feature', 'lib'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })
    })

    describe('module creation', () => {
      it('should call the spawn with the right params - mdu - ft', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'mdu', 'mything'], ft: 'lib'})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack:module', 'mything', '--feature', 'lib'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })

      it('should call the spawn with the right params - module - ft', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'module', 'mything'], ft: 'lib'})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack:module', 'mything', '--feature', 'lib'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })

      it('should call the spawn with the right params - module - feat', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'module', 'mything'], feat: 'lib'})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack:module', 'mything', '--feature', 'lib'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })

      it('should call the spawn with the right params - module - feature', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'module', 'mything'], feature: 'lib'})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack:module', 'mything', '--feature', 'lib'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })
    })

    describe('filter creation', () => {
      it('should call the spawn with the right params - flt - ft', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'flt', 'mything'], ft: 'lib'})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack:filter', 'mything', '--feature', 'lib'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })

      it('should call the spawn with the right params - filter - ft', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'filter', 'mything'], ft: 'lib'})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack:filter', 'mything', '--feature', 'lib'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })

      it('should call the spawn with the right params - filter - feat', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'filter', 'mything'], feat: 'lib'})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack:filter', 'mything', '--feature', 'lib'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })

      it('should call the spawn with the right params - filter - feature', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'filter', 'mything'], feature: 'lib'})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack:filter', 'mything', '--feature', 'lib'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })
    })

    describe('resource creation', () => {
      it('should call the spawn with the right params - rsc - ft', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'rsc', 'mything'], ft: 'lib'})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack:resource', 'mything', '--feature', 'lib'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })

      it('should call the spawn with the right params - resource - ft', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'resource', 'mything'], ft: 'lib'})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack:resource', 'mything', '--feature', 'lib'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })

      it('should call the spawn with the right params - resource - feat', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'resource', 'mything'], feat: 'lib'})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack:resource', 'mything', '--feature', 'lib'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })

      it('should call the spawn with the right params - resource - feature', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'resource', 'mything'], feature: 'lib'})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack:resource', 'mything', '--feature', 'lib'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })
    })

    describe('decorator creation', () => {
      it('should call the spawn with the right params - dec - ft', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'dec', 'mything'], ft: 'lib'})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack:decorator', 'mything', '--feature', 'lib'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })

      it('should call the spawn with the right params - decorator - ft', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'decorator', 'mything'], ft: 'lib'})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack:decorator', 'mything', '--feature', 'lib'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })

      it('should call the spawn with the right params - decorator - feat', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'decorator', 'mything'], feat: 'lib'})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack:decorator', 'mything', '--feature', 'lib'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })

      it('should call the spawn with the right params - decorator - feature', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'decorator', 'mything'], feature: 'lib'})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack:decorator', 'mything', '--feature', 'lib'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })
    })

    describe('pipe creation', () => {
      it('should call the spawn with the right params - pp - ft', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'pp', 'mything'], ft: 'lib'})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack:pipe', 'mything', '--feature', 'lib'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })

      it('should call the spawn with the right params - pipe - ft', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'pipe', 'mything'], ft: 'lib'})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack:pipe', 'mything', '--feature', 'lib'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })

      it('should call the spawn with the right params - pipe - feat', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'pipe', 'mything'], feat: 'lib'})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack:pipe', 'mything', '--feature', 'lib'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })

      it('should call the spawn with the right params - pipe - feature', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'pipe', 'mything'], feature: 'lib'})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack:pipe', 'mything', '--feature', 'lib'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })
    })

    describe('style creation', () => {
      it('should call the spawn with the right params - stl - ft', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'stl', 'mything'], ft: 'lib'})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack:style', 'mything', '--feature', 'lib'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })

      it('should call the spawn with the right params - style - ft', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'style', 'mything'], ft: 'lib'})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack:style', 'mything', '--feature', 'lib'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })

      it('should call the spawn with the right params - style - feat', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'style', 'mything'], feat: 'lib'})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack:style', 'mything', '--feature', 'lib'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })

      it('should call the spawn with the right params - style - feature', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'style', 'mything'], feature: 'lib'})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack:style', 'mything', '--feature', 'lib'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })
    })

    describe('view creation', () => {
      it('should call the spawn with the right params - vw - ft', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'vw', 'mything'], ft: 'lib'})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack:view', 'mything', '--feature', 'lib'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })

      it('should call the spawn with the right params - view - ft', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'view', 'mything'], ft: 'lib'})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack:view', 'mything', '--feature', 'lib'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })

      it('should call the spawn with the right params - view - feat', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'view', 'mything'], feat: 'lib'})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack:view', 'mything', '--feature', 'lib'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })

      it('should call the spawn with the right params - view - feature', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'view', 'mything'], feature: 'lib'})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack:view', 'mything', '--feature', 'lib'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })
    })

    describe('endpoint creation', () => {
      it('should call the spawn with the right params - edpt - ft', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'edpt', 'mything'], ft: 'lib'})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack:endpoint', 'mything', '--feature', 'lib'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })

      it('should call the spawn with the right params - endpoint - ft', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'endpoint', 'mything'], ft: 'lib'})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack:endpoint', 'mything', '--feature', 'lib'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })

      it('should call the spawn with the right params - endpoint - feat', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'endpoint', 'mything'], feat: 'lib'})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack:endpoint', 'mything', '--feature', 'lib'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })

      it('should call the spawn with the right params - endpoint - feature', () => {
        let ngf = new NGF(childProcess, 'wat', {_: ['g', 'endpoint', 'mything'], feature: 'lib'})

        sinon.spy(ngf._childProcess, 'spawn')

        ngf.run()

        sinon.assert.calledOnce(ngf._childProcess.spawn)
        sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack:endpoint', 'mything', '--feature', 'lib'], {
          stdio: 'inherit'
        })

        ngf._childProcess.spawn.restore()
      })
    })
  })
})
