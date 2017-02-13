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
    describe('app creation', () => {
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
  })
})
