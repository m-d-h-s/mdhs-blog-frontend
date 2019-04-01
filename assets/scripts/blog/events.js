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
      .then(data => ui.onUpdateBlogSuccess(data, blogId))
      .then(this.index)
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
  $(`#blog-owned-${blog}`).toggleClass('d-none')
  $(`#blog-title-${blog}`).toggleClass('d-none')
  $(`#blog-body-${blog}`).toggleClass('d-none')
  $(`#edit-blog-${blog}`).toggleClass('d-none')
}

const addHandlers = () => {
  $('body').on('submit', '.blog-crud-form', (event) => {
    event.preventDefault()
    const crudAction = $(event.target).data('action')
    onBlogCrud[crudAction](event)
  })
  $('body').on('click', '.toggle-comments', onToggleComments)
  $('body').on('click', '.edit-blog-btn', toggleEditBlog)

  $('#search-blogs-title-form').on('submit', onSearchBlogsByTitle)
  $('#search-blogs-body-form').on('submit', onSearchBlogsByBody)
}

const onSearchBlogsByTitle = (event) => {
  event.preventDefault()
  const form = event.target
  const blogData = getFormFields(form)

  $('.blog').hide()
  const titles = $('.card-title')
  titles.each(index => {
    if ($(titles[index]).text().includes(blogData.blog.title)) {
      $(`#blog-${$(titles[index]).data('blog-id')}`).show()
    }
  })
}

const onSearchBlogsByBody = (event) => {
  event.preventDefault()
  const form = event.target
  const blogData = getFormFields(form)
  console.log(blogData)
  $('.blog').hide()
  const bodies = $('.card-text')
  bodies.each(index => {
    console.log($(bodies[index]).text())
    if ($(bodies[index]).text().includes(blogData.blog.body)) {
      $(`#blog-${$(bodies[index]).data('blog-id')}`).show()
    }
  })
}
module.exports = {
  addHandlers,
  onBlogCrud,
  onSearchBlogsByTitle,
  onSearchBlogsByBody
}
