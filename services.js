import { plugin } from './src/index'

export default (instance, name) => {
  instance.decorate(name, {
    getName: async _ => instance.customerService2.getName(),
    getSurname: _ => instance.log.info('My Surname is DAntonio')
  })
}