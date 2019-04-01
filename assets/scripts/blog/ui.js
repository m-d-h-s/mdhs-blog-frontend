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
  $('#create-blog-modal').modal('hide')
}

const onIndexBlogSuccess = (responseData) => {
  const showBlogHtml = showBlogTemplate({ blogs: responseData.blog })
  $('form').trigger('reset')
  $('input').trigger('reset')
  $('#blog-content').empty()
  $('#blog-content').append(showBlogHtml)

  view.showOwnership()
  store.user ? $('.post-login').show() : $('.post-login').hide()
  $('#user-message').text('successfully got most recent posts!')
  setTimeout(() => $('#user-message').text(''), 3000)
}
const onShowBlogSuccess = (responseData) => {
  const showBlogHtml = showBlogTemplate({ blogs: responseData })
  $('form').trigger('reset')
  $('input').trigger('reset')
  $('#blog-content').empty()
  $('#blog-content').append(showBlogHtml)
}
const onUpdateBlogSuccess = (responseData, blog, formData) => {
  $('input').trigger('reset')
  $('form').trigger('reset')
  $('#user-message').text('successfully updated post!')

  // remove class d-none to show
  $(`#edit-blog-${blog}`).toggleClass('d-none')

  // add class d-none to hide
  $(`#blog-owned-${blog}`).toggleClass('d-none')

  // right now theres not responseData to replace the current blog with a handlebar
  // work around: inject new data directly into html
  // start work around
  $(`#blog-title-${blog}`).text(formData.blog.title)
  $(`#blog-body-${blog}`).text(formData.blog.body)

  $(`#update-blog-textarea-title-${blog}`).text(formData.blog.title)
  $(`#update-blog-textarea-body-${blog}`).text(formData.blog.body)

  // end work around

  $(`#blog-title-${blog}`).show()
  $(`#blog-body-${blog}`).show()
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
