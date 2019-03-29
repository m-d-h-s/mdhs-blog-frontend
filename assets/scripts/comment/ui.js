'use strict'
const showCommentTemplate = require('../templates/comment-listing.handlebars')
const view = require('../view/view')

const onCreateCommentSuccess = (responseData, blog) => {
  console.log('onCreateCommentSuccess')
  $('#user-message').text('successfully created post!')
  const showCommentHtml = showCommentTemplate({ comment: responseData, blog: blog })
  $('input').trigger('reset')
  $('form').trigger('reset')
  $(`#comments-of-blog-${blog}`).append(showCommentHtml)
  view.showOwnership()
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
const onUpdateCommentSuccess = (responseData, comment, blog) => {
  console.log(comment)
  console.log(responseData)
  $('#user-message').text('successfully updated post!')
  // const showCommentHtml = showCommentTemplate({ comment: responseData, blog: blog })
  $('input').trigger('reset')
  $('form').trigger('reset')
  // $(`#comment-${comment}`).replaceWith('replaced')

  $(`#comment-text-${comment}`).replaceWith(`<h4 id="comment-text-${comment}">${responseData.comment.text}</h4>`)

  view.showOwnership()
}
const onDeleteCommentSuccess = (responseData, element) => {
  console.log('onDeleteCommentSuccess')
  $('#user-message').text('successfully deleted post!')
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
