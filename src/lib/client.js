'use strict'

import axios from 'axios'
import { codes } from './errors'
const { BEE_SDK_ERR_CLIENT_ALREADY_PRESENT } = codes

function add (instance, clientName, opts) {
  if (instance.hasOwnProperty(clientName)) {
    throw new BEE_SDK_ERR_CLIENT_ALREADY_PRESENT(clientName)
  }

  let client = axios.create(opts)
  Object.defineProperty(instance, clientName, {
    get: function () {
      return {
        get: client.get,
        post: client.post,
        options: client.options,
        delete: client.delete,
        patch: client.patch,
        head: client.head,
        put: client.put,
        request: client.request,
        getUri: client.getUri
      }
    }
  })
}

// See full service options here https://github.com/axios/axios#request-config
function addClient (clientName, options) {
  add(this, clientName, options)
  return this
}

export default {
  add: addClient
}