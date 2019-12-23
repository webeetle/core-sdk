import tap from 'tap'
const { test } = tap
import SDK from '../index'

test('check decorator', (t) => {
  t.plan(9)
  const f = _ => {
    return 'this is a message'
  }

  const sdk = new SDK({
    name: 'testSdk'
  })
  
  sdk.decorate('utility', f)
  sdk.decorate('objectUtility', new Object({
    key: 'value'
  }))

  t.deepEqual(typeof sdk.utility, 'function')
  t.deepEqual(sdk.utility(), 'this is a message')
  t.deepEqual(typeof sdk.objectUtility, 'object')
  t.deepEqual(sdk.objectUtility.hasOwnProperty('key'), true)
  t.deepEqual(typeof sdk.objectUtility.key, 'string')
  t.deepEqual(sdk.objectUtility.key, 'value')
  t.deepEqual(sdk.hasDecorator('utility'), true)
  t.deepEqual(sdk.hasDecorator('utility2'), false)

  try {
    sdk.decorate('utility', f)
  } catch (e) {
    t.deepEqual(e.message, 'The decodator \'utility\' already added!')
  }
})