'use strict'
const blogEvents = require('./blog/events.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.blog-crud-form').on('submit', (event) => {
    event.preventDefault()
    const crudAction = $(event.target).data('action')
    blogEvents.onBlogCrud[crudAction](event)
  })
})
