'use strict'
const store = require('../store.js')
const view = require('../view/view')

const signUpSuccess = () => {
  $('#user-message').text('Successfully signed up!')
  $('form').trigger('reset')
  $('#sign-up-modal').modal('hide')
}

const signInSuccess = (responseData) => {
  store.user = responseData.user
  $('#user-message').text('Successfully signed in!')
  $('form').trigger('reset')
  $('.post-login').show()
  $('.pre-login').hide()
  $('#sign-in-modal').modal('hide')
  view.showOwnership()
}

const changePasswordSuccess = () => {
  $('#user-message').show()
  $('#user-message').text('Successfully changed password!')
  $('form').trigger('reset')
  $('#change-password-modal').modal('hide')
}

const signOutSuccess = () => {
  $('#user-message').show()
  $('#user-message').text('Successfully signed out!')
  $('form').trigger('reset')
  $('.post-login').hide()
  $('.pre-login').show()
  $('#sign-out-modal').modal('hide')
  view.hideOwnership()
  store.user = null
}

const failure = () => {
  $('#user-message').show()
  $('#user-message').text('Something went wrong')
  $('form').trigger('reset')
  $('#failure-modal').modal('show')
}

const signInFailure = () => {
  $('#sign-in-form-feedback').text('Your username must exist already and password must be correct. Try again.')
  setTimeout(() => $('#sign-up-form-feedback').hide(), 3000)
}

const signUpFailure = () => {
  $('#sign-up-form-feedback').text('Your username and email must be unique! Try a different one.')
  setTimeout(() => $('#sign-up-form-feedback').hide(), 3000)
}

const changePasswordFailure = () => {
  $('#change-password-form-feedback').text('Your old password must be correct. Try again.')
  setTimeout(() => $('#change-password-form-feedback').hide(), 3000)
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  changePasswordFailure,
  signInFailure,
  failure,
  signUpFailure
}
