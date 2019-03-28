'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onBlogCrud = {
  create: function (event) {
    console.log('onBlogCrudCreate')
    event.preventDefault()
    const formData = getFormFields(event.target)
    api.createBlog(formData)
      .then(ui.onCreateBlogSuccess)
      .catch(ui.onBlogFailure)
  },
  index: function (event) {
    console.log('onBlogCrudIndex')
    if (event) { event.preventDefault() }
    api.indexBlog()
      .then(ui.onIndexBlogSuccess)
      .catch(ui.onBlogFailure)
  },
  show: function (event) {
    console.log('onBlogCrudShow')
    if (event) { event.preventDefault() }
    const formData = getFormFields(event.target)
    api.showBlog(formData)
      .then(ui.onShowBlogSuccess)
      .catch(ui.onBlogFailure)
  },
  update: function (event) {
    console.log('onBlogCrudUpdate')
    event.preventDefault()
    const blogId = $(event.target).data('blog-id')
    const formData = getFormFields(event.target)
    api.updateBlog(formData, blogId)
      .then(ui.onUpdateBlogSuccess)
      .catch(ui.onBlogFailure)
  },
  delete: function (event) {
    console.log('onBlogCrudDelete')
    event.preventDefault()
    const blogId = $(event.target).data('blog-id')
    const formData = getFormFields(event.target)
    api.deleteBlog(formData, blogId)
      .then(ui.onDeleteBlogSuccess)
      .catch(ui.onBlogFailure)
  }
}

const addHandlers = () => {
  $('body').on('submit', '.blog-crud-form', (event) => {
    event.preventDefault()
    const crudAction = $(event.target).data('action')
    onBlogCrud[crudAction](event)
  })
}

module.exports = {
  addHandlers,
  onBlogCrud
}
