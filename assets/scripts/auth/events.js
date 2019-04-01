'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const blog = require('../blog/events')

const onSignUp = () => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(() => { onSignIn(data) })
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = data => {
  if (event) {
    event.preventDefault()
    data = getFormFields(event.target)
  }
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = (event) => {
  event.preventDefault()
  api.signOut()
    .then(blog.onBlogCrud.index)
    .then(ui.signOutSuccess)
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#sign-up-form').on('submit', onSignUp)
  $('#sign-in-form').on('submit', onSignIn)
  $('#sign-out-form').on('submit', onSignOut)
  $('#change-password-form').on('submit', onChangePassword)
  $('.cancel').on('click', () => $('form').trigger('reset'))
}

module.exports = {
  addHandlers
}
