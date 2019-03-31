'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onCommentCrud = {
  create: () => {
    event.preventDefault()
    const formData = getFormFields(event.target)
    const blogId = $(event.target).data('blog-id')
    api.createComment(formData, blogId)
      .then(responseData => ui.onCreateCommentSuccess(responseData, blogId))
      .catch(ui.onCommentFailure)
  },
  index: () => {
    if (event) { event.preventDefault() }
    api.indexComment()
      .then(ui.onIndexCommentSuccess)
      .catch(ui.onCommentFailure)
  },
  delete: function () {
    event.preventDefault()
    const data = $(event.target).data('comment-id')
    api.deleteComment(data)
      .then(responseData => ui.onDeleteCommentSuccess(responseData, data))
      .catch(ui.onCommentFailure)
  },
  show: function (event) {
    event.preventDefault()
    const formData = getFormFields(event.target)
    api.showComment(formData)
      .then(ui.onShowCommentSuccess)
      .catch(ui.onCommentFailure)
  },
  update: () => {
    event.preventDefault()
    const comment = $(event.target).data('comment-id')
    const blog = $(event.target).data('blog-id')
    const formData = getFormFields(event.target)
    api.updateComment(formData, comment)
      .then(() => ui.onUpdateCommentSuccess(formData, comment, blog))
      .catch(ui.onCommentFailure)
  }
}

const toggleEditComment = () => {
  event.preventDefault()
  const comment = $(event.target).data('comment-id')
  $(`#comment-owned-${comment}`).toggleClass('d-none')
  $(`#comment-text-${comment}`).hide()
  $(event.target).hide()
}

const addHandlers = () => {
  $('body').on('submit', '.comment-crud-form', (event) => {
    event.preventDefault()
    const crudAction = $(event.target).data('action')
    onCommentCrud[crudAction](event)
  })
  $('body').on('click', '.edit-comment-btn', toggleEditComment)
}

module.exports = {
  addHandlers,
  onCommentCrud
}
