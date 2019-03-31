'use strict'
const showBlogTemplate = require('../templates/blog-listing.handlebars')
const store = require('../store')
const view = require('../view/view')

const onCreateBlogSuccess = (responseData) => {
  $('#user-message').text('successfully created post!')
  const showBlogHtml = showBlogTemplate({ blog: responseData })
  $('input').trigger('reset')
  $('form').trigger('reset')
  $('#blog-content').empty()
  $('#blog-content').append(showBlogHtml)
  // $(`#edit-blog-${responseData.blog._id}`).toggleClass('d-none')
}

const onIndexBlogSuccess = (responseData) => {
  const showBlogHtml = showBlogTemplate({ blogs: responseData.blog })
  $('form').trigger('reset')
  $('input').trigger('reset')
  $('#blog-content').empty()
  $('#blog-content').append(showBlogHtml)

  view.showOwnership()
  store.user ? $('.post-login').show() : $('.post-login').hide()
}
const onShowBlogSuccess = (responseData) => {
  const showBlogHtml = showBlogTemplate({ blogs: responseData })
  $('form').trigger('reset')
  $('input').trigger('reset')
  $('#blog-content').empty()
  $('#blog-content').append(showBlogHtml)
}
const onUpdateBlogSuccess = (responseData, blog) => {
  $('input').trigger('reset')
  $('form').trigger('reset')
  $('#user-message').text('successfully updated post!')
  $(`#edit-blog-${blog}`).show()
  $(`#edit-blog-${blog}`).toggleClass('d-none')
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
