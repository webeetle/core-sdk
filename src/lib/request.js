'use strict'

const axios = require('axios')

function buildRequest(instance) {
  instance.decorate('req', axios)
}

function init (instance) {
  buildRequest(instance)
}

export default init