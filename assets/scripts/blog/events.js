'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onBlogCrud = {
  create: function (event) {
    event.preventDefault()
    const formData = getFormFields(event.target)
    api.createBlog(formData)
      .then(ui.onCreateBlogSuccess)
      .catch(ui.onBlogFailure)
  },
  index: function (event) {
    event.preventDefault()
    const formData = getFormFields(event.target)
    api.indexBlog(formData)
      .then(ui.onIndexBlogSuccess)
      .catch(ui.onBlogFailure)
  },
  show: function (event) {
    event.preventDefault()
    const formData = getFormFields(event.target)
    api.showBlog(formData)
      .then(ui.onShowBlogSuccess)
      .catch(ui.onBlogFailure)
  },
  update: function (event) {
    event.preventDefault()
    const formData = getFormFields(event.target)
    api.updateBlog(formData)
      .then(ui.onUpdateBlogSuccess)
      .catch(ui.onBlogFailure)
  },
  delete: function (event) {
    event.preventDefault()
    const formData = getFormFields(event.target)
    api.deleteBlog(formData)
      .then(ui.onDeleteBlogSuccess)
      .catch(ui.onBlogFailure)
  }
}

module.exports = {
  onBlogCrud
}
