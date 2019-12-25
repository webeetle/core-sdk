# Core SDK

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/) [![Build Status](https://travis-ci.com/webeetle/core-sdk.svg?branch=master)](https://travis-ci.com/webeetle/core-sdk) [![Greenkeeper badge](https://badges.greenkeeper.io/webeetle/core-sdk.svg)](https://greenkeeper.io/)

Core SDK is a small library that help you to build your own SDK in your Javascript Application.

## Create your own SDK

Start to create your SDK is really simple.

```
import SDK from '@webeetle/core-sdk'

const sdk = new SDK()
```

Now you have an instance of your sdk. Basicly you now have a `sdk.req`. This property defined is an instance of `axios` library. Check out how to use it [here](https://github.com/axios/axios).

In addition to having the property, you will have a set of functionality such as:

- `decorate`: you can decorate your sdk instance with your functionalities.

- `log`: you have a predefined logger.

- `addClient`: allow you to add `axios` based client configuration.

- `addService`: allow you to add plugin to your instance.

### Options

You can pass to the `core-sdk` constructor a set of options:

- `name`: the name of your sdk.

- `clients`: a key value object where the key represent the name and the value is an object that represent an `axios` client configuration.

- `logLevel`: one of `info`, `warn`, `error` (predefined), `trace`.

### Example

```
import SDK from '@webeetle/core-sdk'

const mySdk = new SDK({
  name: 'WeBeetle SDK',
  clients: {
    v1: {
      baseUrl: 'http://api.webeetle.com/v1',
      headers: {'Authorization': 'Bearer 12333321122222'}
    },
    v2: {
      baseUrl: 'http://api.webeetle.com/v2',
      headers: {'Authorization': 'Bearer 44443322222222'}
    }
  },
  logLevel: 'info'
})
```

Perfect now yoou have your configured sdk instance. If you have the necessity to invoke an endpoint on the `v1` api version you can simply:

```
mySdk.v1.post('/your/endpoint')
  .then(response => {
    // Do something useful here
  })
  .catch(e => {
    // Manage the error
  })
```

or if you want to use `v2` api in an `async` function: 

```
async function myUtilityFunction () {
  try {
    const response = await mySdk.v2.post('/your/endpoint')
    // Do something userful here
  } catch (e) {
    // Manage your error here
  }
}
```

## Decorate

The API of your sdk instance allows you to add new properties that you can use everywhere in your application. Here an example:

```
import SDK from '@webeetle/core-sdk'

const mySdk = new SDK()
mySdk.decorate('sum', (a, b) => a + b)
```

and somewhere else in your application you can use it as follow:

```
const total = mySdk.sum(5, 30)
```

With the decorate API you can store everything you want. For example a configuration object.


## Contributing

If you feel you can help in any way, be it with examples, extra testing, or new features please open a pull request or open an issue.

The code follows the Standard code style.

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## Running Tests

Simply run `npm run test` from command line.

## Acknowledgements

This project is kindly sponsored by [Webeetle s.r.l.](https://www.webeetle.com)

## License

Licensed under [MIT](./LICENSE).
