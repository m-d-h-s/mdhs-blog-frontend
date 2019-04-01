'use strict'
const blogEvents = require('./blog/events.js')
const commentEvents = require('./comment/events.js')
const authEvents = require('./auth/events.js')
const client = require('./client-side/store-actions.js')
const view = require('./view/view')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  client.initializeStore()
  authEvents.addHandlers()
  blogEvents.addHandlers()
  commentEvents.addHandlers()
  view.onPageLoad()
  blogEvents.onBlogCrud.index()
  $('.show-nav').on('click', () => $('.main-nav').css('display', 'flex'))
  $('.hide-nav').on('click', () => $('.main-nav').css('display', 'none'))
  $(window).resize(() => {
    if ($(window).width() > 705) {
      $('.main-nav').css('display', 'flex')
    } else { $('.main-nav').css('display', 'none') }
  })
})
