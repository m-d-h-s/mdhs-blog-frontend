// HELPER EXAMPLE
// This helper would be used in a .handlebars file
// with the syntax {{limit title 20}}

'use strict'
const store = require('../../store')

const owner = elementOwner => elementOwner === store.user._id

module.exports = owner
