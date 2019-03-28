// HELPER EXAMPLE
// This helper would be used in a .handlebars file
// with the syntax {{limit title 20}}

'use strict'

const ifEquals = (a, b) => {
  if (a === b) {
    return true
  } else {
    return false
  }
}

module.exports = ifEquals
