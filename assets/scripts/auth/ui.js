'use strict'
const store = require('../store.js')

const signUpSuccess = () => {
  $('#user-message').text('Successfully signed up!')
  $('form').trigger('reset')
}

const signUpFailure = () => {
  $('#user-message').text('Error on sign up :(')
  $('form').trigger('reset')
}

const signInSuccess = (responseData) => {
  $('#user-message').text('Successfully signed in!')
  store.user = responseData.user
  $('form').trigger('reset')
  $('.book-forms').show()
  $('#sign-out-form').show()
  $('#change-password-form').show()
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()
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
  $('#show-one-book-club').hide()
  $('#show-book-club-list').hide()
}

const signOutSuccess = () => {
  $('#user-message').show()
  $('#user-message').text('Successfully signed out!')
  $('form').trigger('reset')
  $('.book-forms').hide()
  $('#sign-out-form').hide()
  $('#sign-in-form').show()
  $('#sign-up-form').show()
  $('#change-password-form').hide()
  $('#show-one-book-club').hide()
  $('#show-book-club-list').hide()
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
