'use strict'
const store = require('../store.js')
const view = require('../view/view')

const signUpSuccess = () => {
  $('#user-message').text('Successfully signed up!')
  $('form').trigger('reset')
}

const signUpFailure = () => {
  $('#user-message').text('Error on sign up :(')
  $('form').trigger('reset')
}

const signInSuccess = (responseData) => {
  store.user = responseData.user
  $('#user-message').text('Successfully signed in!')
  $('form').trigger('reset')
  $('.post-login').show()
  $('.pre-login').hide()
  view.showOwnership()
}

const signInFailure = () => {
  $('#user-message').show()
  $('#user-message').text('Error on sign in :(')
  $('form').trigger('reset')
}

const changePasswordSuccess = () => {
  $('#user-message').show()
  $('#user-message').text('Successfully changed password!')
  $('form').trigger('reset')
  $('#show-one-book-club').hide()
  $('#show-book-club-list').hide()
}

const changePasswordFailure = () => {
  $('#user-message').show()
  $('#user-message').text('Error: Password change failure!')
  $('form').trigger('reset')
}

const signOutSuccess = () => {
  $('#user-message').show()
  $('#user-message').text('Successfully signed out!')
  $('form').trigger('reset')
  $('.post-login').hide()
  $('.pre-login').show()
  view.hideOwnership()
  store.user = null
}

const signOutFailure = () => {
  $('#user-message').show()
  $('#user-message').text('Error signing out')
  $('form').trigger('reset')
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
