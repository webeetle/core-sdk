import tap from 'tap'
import SDK from '../index'
const { test } = tap

test('check logger', (t) => {
  t.plan(4)
  const sdk = new SDK({
    name: 'testSdk'
  })

  t.deepEqual(typeof sdk.log.warn, 'function')
  t.deepEqual(typeof sdk.log.info, 'function')
  t.deepEqual(typeof sdk.log.error, 'function')
  t.deepEqual(typeof sdk.log.trace, 'function')
})

test('error in logger level', (t) => {
  t.plan(1)

  try {
    const sdk = new SDK({
      logLevel: 'notExist'
    })
  } catch (e) {
    t.deepEqual(e.message, 'The log level \'notExist\' does not exist!')
  }
})
