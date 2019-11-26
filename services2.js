export default (instance, name) => {
  instance.decorate(name, {
    getName: _ => instance.log.info("My name is Davide2"),
    getSurname: _ => instance.log.info('My Surname is DAntonio2')
  })
}