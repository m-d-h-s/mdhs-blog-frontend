'use strict'
const blogEvents = require('./blog/events.js')
const commentEvents = require('./comment/events.js')
const authEvents = require('./auth/events.js')
const client = require('./client-side/store-actions.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  client.initializeStore()
  authEvents.addHandlers()
  blogEvents.addHandlers()
  commentEvents.addHandlers()
})
