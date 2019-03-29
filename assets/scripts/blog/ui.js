'use strict'
const showBlogTemplate = require('../templates/blog-listing.handlebars')
const store = require('../store')
const view = require('../view/view')

const onCreateBlogSuccess = (responseData) => {
  // console.log('onCreateBlogSuccess')
  $('#user-message').text('successfully created post!')
  const showBlogHtml = showBlogTemplate({ blog: responseData })
  $('input').trigger('reset')
  $('form').trigger('reset')
  $('#blog-content').empty()
  $('#blog-content').append(showBlogHtml)
}

const onIndexBlogSuccess = (responseData) => {
  // console.log('onIndexBlogSuccess')
  const showBlogHtml = showBlogTemplate({ blogs: responseData.blog })
  $('form').trigger('reset')
  $('input').trigger('reset')
  $('#blog-content').empty()
  $('#blog-content').append(showBlogHtml)

  view.showOwnership()
  // console.log(store)
  store.user ? $('.post-login').show() : $('.post-login').hide()
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
  $('#user-message').text('Something went wrong with Blog...')
}

module.exports = {
  onIndexBlogSuccess,
  onCreateBlogSuccess,
  onShowBlogSuccess,
  onUpdateBlogSuccess,
  onDeleteBlogSuccess,
  onBlogFailure
}
