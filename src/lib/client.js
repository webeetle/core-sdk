'use strict'

import axios from 'axios'
import { codes } from './errors'
const { BEE_SDK_ERR_CLIENT_ALREADY_PRESENT } = codes

function add (instance, clientName, opts) {
  if (Object.prototype.hasOwnProperty.call(instance, clientName)) {
    throw new BEE_SDK_ERR_CLIENT_ALREADY_PRESENT(clientName)
  }

  const client = axios.create(opts)
  instance.decorate(clientName, client)
}

// See full service options here https://github.com/axios/axios#request-config
function addClient (clientName, options) {
  add(this, clientName, options)
  this.log.info(`SKD - Client '${clientName}' added to sdk`)
  return this
}

export default {
  add: addClient
}
