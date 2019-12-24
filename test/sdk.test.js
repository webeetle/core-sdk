import tap from 'tap'
import SDK from '../index'
const { test } = tap

test('create new SDK instance', (t) => {
  t.plan(7)
  const sdk = new SDK()

  t.ok(sdk)
  t.ok(sdk.name)
  t.ok(sdk.decorate)
  t.ok(sdk.hasDecorator)
  t.ok(sdk.log)
  t.ok(sdk.addClient)
  t.ok(sdk.addService)
})

test('check types of SDK instance', (t) => {
  t.plan(7)
  const sdk = new SDK()

  t.deepEqual(typeof sdk, 'object')
  t.deepEqual(typeof sdk.name, 'string')
  t.deepEqual(typeof sdk.decorate, 'function')
  t.deepEqual(typeof sdk.hasDecorator, 'function')
  t.deepEqual(typeof sdk.log, 'object')
  t.deepEqual(typeof sdk.addClient, 'function')
  t.deepEqual(typeof sdk.addService, 'function')
})
