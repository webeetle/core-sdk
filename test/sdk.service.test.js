import tap from 'tap'
import SDK from '../index'
import p from './utils/plugin'
import plugin from '../src/lib/plugin'
const { test } = tap

test('Add Plugin to SDK', (t) => {
  t.plan(3)

  const sdk = new SDK({
    name: 'testSdk'
  })

  sdk.addService('myUtils', p)
  t.ok(sdk.myUtils)
  t.deepEqual(typeof sdk.myUtils, 'object')
  t.deepEqual(typeof sdk.myUtils.myUtil, 'function')
})

test('Error Plugin', (t) => {
  t.plan(2)

  const sdk = new SDK({
    name: 'testSdk'
  })

  try {
    sdk.addService('myUtils', plugin({
    }, {}))
  } catch (e) {
    t.ok(e)
    t.deepEqual(e.message, 'Service expects a function, instead got a \'object\'')
  }
})
