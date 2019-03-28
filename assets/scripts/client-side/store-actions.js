const store = require('../store')

const initializeStore = () => {
  store.user = {}
}

const resetStore = () => {
  store.user = {}
}
module.exports = {
  initializeStore,
  resetStore
}
