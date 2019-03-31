const store = require('../store')

const showOwnership = () => { $(`.owned[data-owner=${store.user._id}]`).show() }

const hideOwnership = () => { $('.owned').hide() }

const onPageLoad = () => {
// console.log('onPageLoad')
  $('.post-login').hide()
}

module.exports = {
  showOwnership,
  hideOwnership,
  onPageLoad
}
