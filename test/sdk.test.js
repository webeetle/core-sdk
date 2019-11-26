import SDK from '../src/index'
import service from '../services'
import service2 from '../services2'

it('We can check if the consumer called the class constructor', () => {
  const mySdk = new SDK({
    name: 'KamAppSDK',
    logLevel: 'info',
  });

  mySdk.addService('customerService', service)
  mySdk.addService('customerService2', service2)
  console.log(expect(mySdk.customerService.getName()))
})
