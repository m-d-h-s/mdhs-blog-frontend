'use strict'
const showBlogTemplate = require('../templates/blog-listing.handlebars')
const store = require('../store')

const onCreateBlogSuccess = (responseData) => {
  $('#user-message').text('successfully created post!')
  const showBlogHtml = showBlogTemplate({ blog: responseData })
  $('input').trigger('reset')
  $('form').trigger('reset')
  $('#blog-content').empty()
  $('#blog-content').append(showBlogHtml)
}

const onIndexBlogSuccess = (responseData) => {
  console.log('onIndexBlogSuccess')
  $('#user-message').text('successfully got posts!')
  const showBlogHtml = showBlogTemplate({ blogs: responseData.blog })
  $('form').trigger('reset')
  $('input').trigger('reset')
  $('#blog-content').empty()
  $('#blog-content').append(showBlogHtml)

  console.log(store)
  console.log($('.owned')[0].getAttribute('data-owner'))
  // if (store.user._id === $('.owned').first().data('owner')) { $('.owned').show() }

  $('.owned').each(index => {
    console.log($('.owned')[index])
    console.log($($('.owned')[index]).data('owner'))
    const ownedElement = $($('.owned')[index])
    if (store.user._id === ownedElement.data('owner')) {
      ownedElement.show()
    }
  })
}
const onShowBlogSuccess = (responseData) => {
  const showBlogHtml = showBlogTemplate({ blogs: responseData })
  $('form').trigger('reset')
  $('input').trigger('reset')
  $('#blog-content').empty()
  $('#blog-content').append(showBlogHtml)
}
const onUpdateBlogSuccess = (responseData) => {
  $('input').trigger('reset')
  $('form').trigger('reset')
  $('#user-message').text('successfully updated post!')
}
const onDeleteBlogSuccess = id => {
  $('input').trigger('reset')
  $('form').trigger('reset')
  $('#user-message').text('successfully deleted post!')
  $(`#blog-${id}`).hide()
}

const onBlogFailure = (responseData) => {
  $('input').trigger('reset')
  $('form').trigger('reset')
  $('#user-message').text('something went wrong...')
}

module.exports = {
  onIndexBlogSuccess,
  onCreateBlogSuccess,
  onShowBlogSuccess,
  onUpdateBlogSuccess,
  onDeleteBlogSuccess,
  onBlogFailure
}
