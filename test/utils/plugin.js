import plugin from '../../src/lib/plugin'

export default plugin((instance, name) => {
  instance.decorate(name, {
    myUtil: _ => {
      return 'this is my util'
    }
  })
}, {})
