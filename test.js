/* eslint-env mocha */

const assert = require('assert')
const nombre = require('.')

it('should convert integer in any radix into decimal integer', () => {
  assert.equal(15, nombre('F', 16))
  assert.equal(0.5, nombre('0.1', 2))
  assert(isNaN(nombre('boom', 5)))
})
