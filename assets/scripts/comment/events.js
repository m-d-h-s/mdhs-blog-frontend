'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const blog = require('../blog/events')

const onCommentCrud = {
  create: () => {
    console.log('onCommentCrudCreate')
    event.preventDefault()
    const formData = getFormFields(event.target)
    const blogId = $(event.target).data('blog-id')
    api.createComment(formData, blogId)
      .then(ui.onCreateCommentSuccess)
      .then(() => blog.onBlogCrud.index())
      .catch(ui.onCommentFailure)
  },
  index: () => {
    console.log('onCommentCrudIndex')
    if (event) { event.preventDefault() }
    api.indexComment()
      .then(ui.onIndexCommentSuccess)
      .catch(ui.onCommentFailure)
  },
  delete: function () {
    console.log('onCommentCrudDelete')
    event.preventDefault()
    const data = $(event.target).data('comment-id')
    api.deleteComment(data)
      .then(() => blog.onBlogCrud.index())
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
    console.log('onCommentCrudUpdate')
    event.preventDefault()
    const data = $(event.target).data('comment-id')
    const formData = getFormFields(event.target)
    console.log(data)
    api.updateComment(formData, data)
      .then(ui.onUpdateCommentSuccess)
      .then(() => blog.onBlogCrud.index())
      .catch(ui.onCommentFailure)
  }
}

const addHandlers = () => {
  $('body').on('submit', '.comment-crud-form', (event) => {
    event.preventDefault()
    const crudAction = $(event.target).data('action')
    onCommentCrud[crudAction](event)
  })
}

module.exports = {
  addHandlers,
  onCommentCrud
}
