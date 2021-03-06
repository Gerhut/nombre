/* eslint-env mocha */
var nombre = require('.')

it('should convert integer in any radix into decimal integer', function () {
  nombre('F', 16).should.equal(15)
})

it('should convert float in any radix into decimal float', function () {
  nombre('0.1', 2).should.equal(0.5)
})

it('should convert unknown numbers into NaN', function () {
  nombre('boom', 5).should.be.NaN()
})
