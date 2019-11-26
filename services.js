export default (instance, name) => {
  instance.decorate(name, {
    getName: _ => instance.customerService2.getName(),
    getSurname: _ => instance.log.info('My Surname is DAntonio')
  })
}