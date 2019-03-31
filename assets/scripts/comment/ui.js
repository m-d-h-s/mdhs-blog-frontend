'use strict'
const showCommentTemplate = require('../templates/comment-listing.handlebars')
const view = require('../view/view')

const onCreateCommentSuccess = (responseData, blog) => {
  // console.log('onCreateCommentSuccess')
  $('#user-message').text('successfully created post!')
  const showCommentHtml = showCommentTemplate({ comment: responseData, blog: blog })
  $('input').trigger('reset')
  $('form').trigger('reset')
  $(`#comments-list-${blog}`).append(showCommentHtml)
  view.showOwnership()
}

const onIndexCommentSuccess = (responseData) => {
  // console.log('onIndexCommentSuccess')
  const showCommentHtml = showCommentTemplate({ comment: responseData.comment })
  $('form').trigger('reset')
  $('input').trigger('reset')
  $('#comment-content').empty()
  $('#comment-content').append(showCommentHtml)
}
const onShowCommentSuccess = (responseData) => {
  const showCommentHtml = showCommentTemplate({ comment: responseData })
  $('form').trigger('reset')
  $('input').trigger('reset')
  $('#comment-content').empty()
  $('#comment-content').append(showCommentHtml)
}
const onUpdateCommentSuccess = (responseData, comment, blog) => {
  console.log('onUpdateCommentSuccess')
  $('#user-message').text('successfully updated post!')
  $('input').trigger('reset')
  $('form').trigger('reset')

  console.log(responseData)

  $(`#comment-text-${comment}`).text(responseData.comment.text)
  $(`#comment-textarea-${comment}`).text(responseData.comment.text)

  view.showOwnership()
  $(`#edit-comment-${comment}`).show()
  $(`#comment-text-${comment}`).show()
  $(`#comment-owned-${comment}`).toggleClass('d-none')
}
const onDeleteCommentSuccess = (responseData, element) => {
  // console.log('onDeleteCommentSuccess')
  $('#user-message').text('successfully deleted comment!')
  $('input').trigger('reset')
  $('form').trigger('reset')
  $(`#comment-${element}`).hide()
}

const onCommentFailure = (responseData) => {
  $('input').trigger('reset')
  $('form').trigger('reset')
  $('#user-message').text('Something went wrong with Comment...')
}

module.exports = {
  onIndexCommentSuccess,
  onCreateCommentSuccess,
  onShowCommentSuccess,
  onUpdateCommentSuccess,
  onDeleteCommentSuccess,
  onCommentFailure
}
