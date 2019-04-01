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
  // on click do patch request to blog
  // add current user to blog.likes array

  // make button bg green if in array
  // regular background if not in array
}

const onModalFailure = () => {
  if (event) { event.preventDefault() }

  $('#failure-modal').modal('hide')

  api.indexBlog()
    .then(ui.onIndexBlogSuccess)
    .catch(ui.onBlogFailure)
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
  $('#refresh-button').on('click', onModalFailure)

  $('#search-blogs-title-form').on('submit', onSearchBlogsByTitle)
  $('#search-blogs-body-form').on('submit', onSearchBlogsByBody)
  $('#search-blogs-handle-form').on('submit', onSearchBlogsByHandle)
}

const onSearchBlogsByTitle = (event) => {
  event.preventDefault()
  const form = event.target
  const blogData = getFormFields(form)

  $('.blog').hide()
  const titles = $('.card-title')
  titles.each(index => {
    if ($(titles[index]).text().includes(blogData.blog.title)) {
      const blogId = $(titles[index]).data('blog-id')
      $(`#blog-${blogId}`).show()
    }
  })

  $('#search-title-modal').modal('hide')
}

const onSearchBlogsByBody = (event) => {
  event.preventDefault()
  const form = event.target
  const blogData = getFormFields(form)

  $('.blog').hide()
  const bodies = $('.card-text')
  bodies.each(index => {
    if ($(bodies[index]).text().includes(blogData.blog.body)) {
      const blogId = $(bodies[index]).data('blog-id')
      $(`#blog-${blogId}`).show()
      $(`#card-body-blog-${blogId}`).collapse('show')
    }
  })
  $('#search-content-modal').modal('hide')
}

const onSearchBlogsByHandle = (event) => {
  event.preventDefault()
  const form = event.target
  const blogData = getFormFields(form)
  $('.blog').hide()
  const handles = $('.handle-text')
  handles.each(index => {
    if ($(handles[index]).text() === blogData.blog.handle) {
      const blogId = $(handles[index]).data('blog-id')
      $(`#blog-${blogId}`).show()
      $(`#card-body-blog-${blogId}`).collapse('show')
    }
  })
  $('#search-handle-modal').modal('hide')
}

module.exports = {
  addHandlers,
  onBlogCrud
}
