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

  describe('init', () => {
    it('should call the spawn correctly', () => {
      let ngf = new NGF(childProcess, 'wat', {a: true})

      sinon.spy(ngf._childProcess, 'spawn')

      ngf.init()

      sinon.assert.calledOnce(ngf._childProcess.spawn)
      sinon.assert.calledWith(ngf._childProcess.spawn, 'wat', ['ng-fullstack'], {
        stdio: 'inherit'
      })
    })
  })
})
