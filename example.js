const SDK = require('./src');

const mySdk = new SDK({
  name: 'KamAppSDK'
});

mySdk.decorate('ciao', _ => console.log('ciao'))
console.log(mySdk.hasDecorator('ciao'))
mySdk.decorate('ciao', _ => console.log('ciao'));