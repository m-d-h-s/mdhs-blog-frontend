'use strict'
const blogEvents = require('./blog/events.js')
const commentEvents = require('./comment/events.js')
const authEvents = require('./auth/events.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#sign-out-form').on('submit', authEvents.onSignOut)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('.blog-crud-form').on('submit', (event) => {
    event.preventDefault()
    const crudAction = $(event.target).data('action')
    blogEvents.onBlogCrud[crudAction](event)
  })
  $('body').on('submit', '.comment-crud-form', (event) => {
    event.preventDefault()
    const crudAction = $(event.target).data('action')
    commentEvents.onCommentCrud[crudAction](event)
  })
})
