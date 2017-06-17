(function (root, factory) {
  /* eslint-env amd, commonjs */
  /* istanbul ignore next */
  if (typeof define === 'function' && define.amd) define('nombre', factory)
  else if (typeof module === 'object' && module.exports) module.exports = factory()
  else root.nombre = factory()
}(this, function () {
  return function (string, radix) {
    var pointIndex = string.indexOf('.')
    if (pointIndex === -1) pointIndex = string.length
    string = string.replace('.', '')

    var integer = parseInt(string, radix)
    if (isNaN(integer)) return integer

    return integer / Math.pow(radix, string.length - pointIndex)
  }
}))
