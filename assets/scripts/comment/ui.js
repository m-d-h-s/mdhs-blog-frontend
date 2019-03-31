'use strict'
const showCommentTemplate = require('../templates/comment-listing.handlebars')
const view = require('../view/view')
const store = require('../store')

const onCreateCommentSuccess = (responseData, blog) => {
  $('#user-message').text('successfully created post!')
  const handle = store.user.handle
  const showCommentHtml = showCommentTemplate({ comment: responseData, blog: blog })
  $('input').trigger('reset')
  $('form').trigger('reset')
  $(`#comments-list-${blog}`).append(showCommentHtml)
  $(`#comment-handle-${responseData.comment._id}`).text(`${handle} comments:`)
  view.showOwnership()
}

const onIndexCommentSuccess = (responseData) => {
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
  $('#user-message').text('successfully updated post!')
  $('input').trigger('reset')
  $('form').trigger('reset')

  $(`#comment-text-${comment}`).text(responseData.comment.text)
  $(`#comment-textarea-${comment}`).text(responseData.comment.text)

  // const showCommentHtml = showCommentTemplate({ comment: responseData, blog: blog })
  // $(`#comment-${comment}`).replaceWith(showCommentHtml)

  view.showOwnership()
  $(`#edit-comment-${comment}`).toggleClass('d-none')
  $(`#comment-text-${comment}`).show()
  $(`#comment-owned-${comment}`).toggleClass('d-none')
}
const onDeleteCommentSuccess = (responseData, element) => {
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
