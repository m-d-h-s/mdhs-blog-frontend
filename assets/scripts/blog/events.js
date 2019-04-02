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

const onLikeBlog = () => {
  event.preventDefault()
  const blogId = $(event.target).data('blog-id')

  api.likeBlog(blogId)
    .then(() => ui.onBlogLikeSuccess(blogId))
    .catch(ui.onBlogFailure)
}

const onModalFailure = (event) => {
  if (event) { event.preventDefault() }

  $('#failure-modal').modal('hide')

  api.indexBlog()
    .then(ui.onIndexBlogSuccess)
    .catch(ui.onBlogFailure)
}

const onSearchBlogsByTitle = (event) => {
  event.preventDefault()
  const form = event.target
  const blogData = getFormFields(form)
  $('.blog').hide()
  const titles = $('.card-title')
  let counter = 0
  titles.each(index => {
    if ($(titles[index]).text().toLowerCase().includes(blogData.blog.title.toLowerCase())) {
      const blogId = $(titles[index]).data('blog-id')
      $(`#blog-${blogId}`).show()
      counter++
    }
  })

  $('#collapse-all-comments').attr('disabled', false)
  $('#user-message').text(`Search Results For: ${blogData.blog.title}`)

  if (!counter) {
    $('#user-message').text('No Blogs Found')
    $('#collapse-all-comments').attr('disabled', true)
  }

  $('#search-modal').modal('hide')
  $('form').trigger('reset')
}

const onSearchBlogsByBody = (event) => {
  event.preventDefault()
  const form = event.target
  const blogData = getFormFields(form)
  let counter = 0

  $('.blog').hide()
  const bodies = $('.card-text')
  bodies.each(index => {
    if ($(bodies[index]).text().toLowerCase().includes(blogData.blog.body.toLowerCase())) {
      const blogId = $(bodies[index]).data('blog-id')
      $(`#blog-${blogId}`).show()
      $(`#card-body-blog-${blogId}`).collapse('show')
      counter++
    }
  })

  $('#collapse-all-comments').attr('disabled', false)
  $('#user-message').text(`Search Results For: ${blogData.blog.body}`)

  if (!counter) {
    $('#user-message').text('No Blogs Found')
    $('#collapse-all-comments').attr('disabled', true)
  }

  $('#search-modal').modal('hide')
  $('form').trigger('reset')
}

const onSearchBlogsByHandle = (event) => {
  event.preventDefault()
  const form = event.target
  const blogData = getFormFields(form)
  let counter = 0

  $('.blog').hide()
  const handles = $('.handle-text')
  handles.each(index => {
    if ($(handles[index]).data('handle') === blogData.blog.handle) {
      const blogId = $(handles[index]).data('blog-id')
      $(`#blog-${blogId}`).show()
      $(`#card-body-blog-${blogId}`).collapse('show')
      counter++
    }
  })

  $('#collapse-all-comments').attr('disabled', false)
  $('#user-message').text(`Search Results For Handle: ${blogData.blog.handle}`)

  if (!counter) {
    $('#user-message').text('No Handle Found')
    $('#collapse-all-comments').attr('disabled', true)
  }

  $('#search-modal').modal('hide')
  $('form').trigger('reset')
}

const addHandlers = () => {
  $('body').on('submit', '.blog-crud-form', (event) => {
    event.preventDefault()
    const crudAction = $(event.target).data('action')
    onBlogCrud[crudAction](event)
  })
  $('body').on('click', '.edit-blog-btn', toggleEditBlog)
  $('body').on('click', '.like-blog-btn', onLikeBlog)
  $('body').on('click', '.toggle-comments', onToggleComments)

  $('#refresh-button').on('click', onModalFailure)
  $('#page-title').on('click', onBlogCrud.index)

  $('#search-blogs-title-form').on('submit', onSearchBlogsByTitle)
  $('#search-blogs-body-form').on('submit', onSearchBlogsByBody)
  $('#search-blogs-handle-form').on('submit', onSearchBlogsByHandle)
}

module.exports = {
  addHandlers,
  onBlogCrud
}
