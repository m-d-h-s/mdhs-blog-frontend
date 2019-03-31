const store = require('../store')

const showOwnership = () => {
  if (!store.user) { return }
  $(`.owned[data-owner=${store.user._id}]`).show()
}

const hideOwnership = () => { $('.owned').hide() }

const onPageLoad = () => {
  $('.post-login').hide()
}

module.exports = {
  showOwnership,
  hideOwnership,
  onPageLoad
}
