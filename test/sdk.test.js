import SDK from '../src/index'

it('We can check if the consumer called the class constructor', () => {
  const mySdk = new SDK({
    name: 'KamAppSDK',
    logLevel: 'info',
    clients: {
      mammt: {
        baseURL: 'http://localhost',
        timeout: 1000,
        headers: {'X-Custom-Header': 'foobar'}
      }
    }
  });

  console.log(mySdk.mammt)

});
