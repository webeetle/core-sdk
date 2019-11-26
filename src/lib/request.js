'use strict'

const axios = require('axios')

function buildRequest(instance) {
  instance.decorate('request', axios.request)
  instance.decorate('post', axios.post)
  instance.decorate('get', axios.get)
  instance.decorate('delete', axios.delete)
  instance.decorate('head', axios.head)
  instance.decorate('options', axios.options)
  instance.decorate('put', axios.put)
  instance.decorate('patch', axios.patch)
  instance.decorate('getUri', axios.getUri)
}

function init (instance) {
  buildRequest(instance)
}

export default init