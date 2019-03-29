'use strict'
const showCommentTemplate = require('../templates/comment-listing.handlebars')

const onCreateCommentSuccess = (responseData) => {
  console.log('onCreateCommentSuccess')
  $('#user-message').text('successfully created post!')
  const showCommentHtml = showCommentTemplate({ comment: responseData })
  $('input').trigger('reset')
  $('form').trigger('reset')
  $('#comment-content').empty()
  $('#comment-content').append(showCommentHtml)
}

const onIndexCommentSuccess = (responseData) => {
  console.log('onIndexCommentSuccess')
  $('#user-message').text('successfully got posts!')
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
  $('#user-message').text('successfully updated post!')
}
const onDeleteCommentSuccess = (responseData, element) => {
  console.log('onDeleteCommentSuccess')
  $('input').trigger('reset')
  $('form').trigger('reset')
  $('#user-message').text('successfully deleted post!')
  $(`#comment-${element}`).hide()
}

const onCommentFailure = (responseData) => {
  $('input').trigger('reset')
  $('form').trigger('reset')
  $('#user-message').text('something went wrong...')
}

module.exports = {
  onIndexCommentSuccess,
  onCreateCommentSuccess,
  onShowCommentSuccess,
  onUpdateCommentSuccess,
  onDeleteCommentSuccess,
  onCommentFailure
}
