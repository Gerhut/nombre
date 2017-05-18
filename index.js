module.exports = (string, radix) => {
  let pointIndex = string.indexOf('.')
  if (pointIndex === -1) pointIndex = string.length
  string = string.replace('.', '')

  let integer = parseInt(string, radix)
  if (isNaN(integer)) return NaN

  return integer / Math.pow(radix, string.length - pointIndex)
}
