'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onCommentCrud = {
  create: function (event) {
    event.preventDefault()
    const formData = getFormFields(event.target)
    api.createComment(formData)
      .then(ui.onCreateCommentSuccess)
      .catch(ui.onCommentFailure)
  },
  index: function (event) {
    event.preventDefault()
    const formData = getFormFields(event.target)
    api.indexComment(formData)
      .then(ui.onIndexCommentSuccess)
      .catch(ui.onCommentFailure)
  },
  show: function (event) {
    event.preventDefault()
    const formData = getFormFields(event.target)
    api.showComment(formData)
      .then(ui.onShowCommentSuccess)
      .catch(ui.onCommentFailure)
  },
  update: function (event) {
    event.preventDefault()
    const formData = getFormFields(event.target)
    api.updateComment(formData)
      .then(ui.onUpdateCommentSuccess)
      .catch(ui.onCommentFailure)
  },
  delete: function (event) {
    event.preventDefault()
    const formData = getFormFields(event.target)
    api.deleteComment(formData)
      .then(ui.onDeleteCommentSuccess)
      .catch(ui.onCommentFailure)
  }
}

module.exports = {
  onCommentCrud
}
