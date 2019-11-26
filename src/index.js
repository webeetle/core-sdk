'use strict'

import decorator from './lib/decorate'
import { createLogger } from './lib/logger'
import client from './lib/client'
import initRequest from './lib/request'
import service from './lib/service'

function SDK (options) {
  options = options || {}

  if (typeof options !== 'object') {
    throw new Error('Options must be an object')
  }
  const clientsOpts = options.clients || false

  // Instance SDK components
  const logger = createLogger(options)

  let sdk = {
    name: options.name || 'sdk',
    decorate: decorator.add,
    hasDecorator: decorator.exist,
    // expose the log instance
    log: logger,
    addClient: client.add,
    addService: service.add
  }

  initRequest(sdk)

  if (clientsOpts) {
    addClients(sdk, clientsOpts)
  }

  return sdk

  function addClients(instance, opts) {
    for (let name of Object.keys(opts)) {
      instance.addClient(name, opts[name])
    }
  }
}

export default SDK