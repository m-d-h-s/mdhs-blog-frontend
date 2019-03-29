'use strict'
const showCommentTemplate = require('../templates/comment-listing.handlebars')

const onCreateCommentSuccess = (responseData) => {
  // console.log('onCreateCommentSuccess')
  $('#user-message').text('successfully created comment!')
  const showCommentHtml = showCommentTemplate({ comment: responseData })
  $('input').trigger('reset')
  $('form').trigger('reset')
  $('#comment-content').empty()
  $('#comment-content').append(showCommentHtml)
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
const onUpdateCommentSuccess = (responseData) => {
  $('input').trigger('reset')
  $('form').trigger('reset')
  $('#user-message').text('successfully updated comment!')
}
const onDeleteCommentSuccess = (responseData, element) => {
  // console.log('onDeleteCommentSuccess')
  $('input').trigger('reset')
  $('form').trigger('reset')
  $('#user-message').text('successfully deleted comment!')
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
