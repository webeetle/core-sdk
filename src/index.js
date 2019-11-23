const decorator = require('./lib/decorate')

function build (options) {
  options = options || {}

  if (typeof options !== 'object') {
    throw new Error('Options must be an object')
  }

  const sdk = {
    name: options.name || 'sdk',
    decorate: decorator.add,
    hasDecorator: decorator.exist
  }

  return sdk
}

module.exports = build