'use strict'
const showBlogTemplate = require('../templates/blog-listing.handlebars')
const store = require('../store')
const view = require('../view/view')

const scoreSort = (blogs) => {
  return blogs.sort((a, b) => {
    const value = a.score - b.score
    if (value > 0) {
      return 1
    } else if (value < 0) {
      return -1
    } else { return 0 }
  })
}

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
  const sortedBlogs = scoreSort(responseData.blog)
  const showBlogHtml = showBlogTemplate({ blogs: sortedBlogs })
  $('form').trigger('reset')
  $('input').trigger('reset')
  $('#blog-content').empty()
  $('#blog-content').append(showBlogHtml)
  $('#collapse-all-comments').attr('disabled', false)

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

const onBlogLikeSuccess = (blogId) => {
  $('input').trigger('reset')
  $('form').trigger('reset')

  const buttonText = $(`#like-blog-${blogId}`).text()
  let likeCount = parseInt($(`#like-count-${blogId}`).text(), 10)
  if (buttonText.includes('Unlike')) {
    $(`#like-blog-${blogId}`).text('Like 👍')
    likeCount--
    $(`#like-count-${blogId}`).text(`${likeCount} likes`)
  } else {
    $(`#like-blog-${blogId}`).text('Unlike 👎')
    likeCount++
    $(`#like-count-${blogId}`).text(`${likeCount} likes`)
  }
}

const onBlogFailure = (responseData) => {
  $('input').trigger('reset')
  $('form').trigger('reset')
  $('#user-message').text('Something went wrong with Blog...')
  $('#failure-modal').modal('show')
}

module.exports = {
  onIndexBlogSuccess,
  onCreateBlogSuccess,
  onShowBlogSuccess,
  onUpdateBlogSuccess,
  onDeleteBlogSuccess,
  onBlogLikeSuccess,
  onBlogFailure
}
