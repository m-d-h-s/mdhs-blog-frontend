'use strict'
// HELPER EXAMPLE
// This helper would be used in a .handlebars file
// with the syntax {{limit title 20}}
const store = require('../../store.js')

const limit = (likes) => {
  let liked = false
  if (likes.some(like => like.toString() === store.user._id)) { liked = true }
  return liked
}

module.exports = limit
