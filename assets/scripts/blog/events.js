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
      .then(this.index)
      .catch(ui.onBlogFailure)
  },
  index: function (event) {
    if (event) { event.preventDefault() }
    api.indexBlog()
      .then(ui.onIndexBlogSuccess)
      .catch(ui.onBlogFailure)
  },
  show: function (event) {
    if (event) { event.preventDefault() }
    const formData = getFormFields(event.target)
    api.showBlog(formData)
      .then(ui.onShowBlogSuccess)
      .catch(ui.onBlogFailure)
  },
  update: function (event) {
    event.preventDefault()
    const blogId = $(event.target).data('blog-id')
    const formData = getFormFields(event.target)
    api.updateBlog(formData, blogId)
      .then(data => ui.onUpdateBlogSuccess(data, blogId, formData))
      .catch(ui.onBlogFailure)
  },
  delete: function (event) {
    event.preventDefault()
    const id = $(event.target).data('blog-id')
    api.deleteBlog(id)
      .then(() => ui.onDeleteBlogSuccess(id))
      .catch(ui.onBlogFailure)
  }
}

const onToggleComments = () => {
  event.preventDefault()
  const blog = $(event.target).data('blog-id')
  $(`.collapse[data-blog-id=${blog}]`).collapse('toggle')

  if ($(event.target).text() === 'Hide Comments') {
    $(event.target).text('Show Comments')
  } else {
    $(event.target).text('Hide Comments')
  }
}

const toggleEditBlog = () => {
  event.preventDefault()
  const blog = $(event.target).data('blog-id')

  // toggle owned buttons (update/delete) to show
  $(`#blog-owned-${blog}`).toggleClass('d-none')

  // toggle title to hide
  $(`#blog-title-${blog}`).hide()

  // toggle body to hide
  $(`#blog-body-${blog}`).hide()

  // toggle edit button to hide
  $(`#edit-blog-${blog}`).toggleClass('d-none')
}

const onLikeBlog = () => {
  event.preventDefault()
}

const toggleCollapseAllBlogs = () => {
  event.preventDefault()

  if ($('#collapse-all-blogs').text() === 'Open all Blogs') {
    $('#collapse-all-blogs').text('Close all Blogs')
    $('.card-body').collapse('show')
  } else {
    $('#collapse-all-blogs').text('Open all Blogs')
    $('.card-body').collapse('hide')
  }
}

const addHandlers = () => {
  $('body').on('submit', '.blog-crud-form', (event) => {
    event.preventDefault()
    const crudAction = $(event.target).data('action')
    onBlogCrud[crudAction](event)
  })
  $('body').on('click', '.toggle-comments', onToggleComments)
  $('body').on('click', '.edit-blog-btn', toggleEditBlog)
  $('body').on('click', '.like-blog-btn', onLikeBlog)
  $('#collapse-all-blogs').on('click', toggleCollapseAllBlogs)
}

module.exports = {
  addHandlers,
  onBlogCrud
}
