/* eslint-env mocha */
require('should')
var nombre = require('.')

it('should convert integer in any radix into decimal integer', function () {
  nombre('F', 16).should.equal(15)
  nombre('0.1', 2).should.equal(0.5)
  nombre('boom', 5).should.be.NaN()
})
