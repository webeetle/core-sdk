import tap from 'tap'
import SDK from '../index'
const { test } = tap

test('check instance name', (t) => {
  t.plan(2)
  const sdk = new SDK({
    name: 'testSdk'
  })

  const sdk2 = new SDK()

  t.deepEqual(sdk.name, 'testSdk')
  t.deepEqual(sdk2.name, 'sdk')
})
