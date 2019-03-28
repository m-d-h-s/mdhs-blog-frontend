'use strict'
const showBlogTemplate = require('../templates/blog-listing.handlebars')

const onCreateBlogSuccess = (responseData) => {
  $('#user-message').text('successfully created post!')
  const showBlogHtml = showBlogTemplate({ blog: responseData.blog })
  $('input').trigger('reset')
  $('form').trigger('reset')
  $('#blog-content').empty()
  $('#blog-content').append(showBlogHtml)
}

const onIndexBlogSuccess = (responseData) => {
  $('#user-message').text('successfully got posts!')
  const showBlogHtml = showBlogTemplate({ blog: responseData.blog })
  $('form').trigger('reset')
  $('input').trigger('reset')
  $('#blog-content').empty()
  $('#blog-content').append(showBlogHtml)
}
const onShowBlogSuccess = (responseData) => {
  const showBlogHtml = showBlogTemplate({ blog: responseData })
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
const onDeleteBlogSuccess = (responseData) => {
  $('input').trigger('reset')
  $('form').trigger('reset')
  $('#user-message').text('successfully deleted post!')
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
