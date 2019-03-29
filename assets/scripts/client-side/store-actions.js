const store = require('../store')

const initializeStore = () => {
  store.user = false
}

const resetStore = () => {
  store.user = false
}
module.exports = {
  initializeStore,
  resetStore
}
