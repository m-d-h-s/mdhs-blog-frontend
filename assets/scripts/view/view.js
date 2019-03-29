const store = require('../store')

const showOwnership = () => {
  $('.owned').each(index => {
    const ownedElement = $($('.owned')[index])
    if (store.user._id === ownedElement.data('owner')) { ownedElement.show() }
  })
}

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
