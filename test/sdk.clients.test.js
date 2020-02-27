import tap from 'tap'
import SDK from '../index'
const { test } = tap

test('check clients', (t) => {
  t.plan(3)

  const sdk = new SDK({
    name: 'testSdk',
    clients: {
      exampleClient: {
        baseUrl: 'http://localhost:300',
        interceptors: [
          {
            type: 'request',
            func: config => {
              console.log(config)
            }, function (error) {
              console.log(error);
            }
          }
        ]
      }
    }
  })

  t.ok(sdk.exampleClient)

  try {
    sdk.addClient('exampleClient', {})
  } catch (e) {
    t.ok(e)
    t.deepEqual(e.message, 'The client \'exampleClient\' already present!')
  }
})
