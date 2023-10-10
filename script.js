'use strict';
console.log('script.js file was loaded');

const form = document.getElementById('form');
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const erorrFirstName = document.getElementById('error-firstName');
const erorrLastName = document.getElementById('error-lastName');
const erorrEmail = document.getElementById('error-email');
const erorrPassword = document.getElementById('error-password');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const firstNameValue = firstNameInput.value.trim();
  const lastNameValue = lastNameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  console.log('emailValue ===', emailValue);

  emptyValues(firstNameValue, lastNameValue, emailValue, passwordValue);
});

function emptyValues(firstName, lastName, email, password) {
  console.log('email ===', email);

  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // First Name
  if (firstName === '') {
    erorrFirstName.classList.add('show');
    firstNameInput.classList.add('red-border');
  } else {
    erorrFirstName.classList.remove('show');
    firstNameInput.classList.remove('red-border');
  }

  // Last Name
  if (lastName === '') {
    erorrLastName.classList.add('show');
    lastNameInput.classList.add('red-border');
  } else {
    erorrLastName.classList.remove('show');
    lastNameInput.classList.remove('red-border');
  }

  // Email
  console.log('emailRegex.test(email) ===', emailRegex.test(email));
  if (email == '') {
    erorrEmail.classList.add('show');
    emailInput.classList.add('red-border');
  } else if (!emailRegex.test(email)) {
    erorrEmail.classList.add('show');
    emailInput.classList.add('red-border');
    erorrEmail.textContent = 'Looks like this is not an email';
  } else {
    erorrEmail.classList.remove('show');
    emailInput.classList.remove('red-border');
  }

  // Password
  if (password === '') {
    erorrPassword.classList.add('show');
    passwordInput.classList.add('red-border');
  } else {
    erorrPassword.classList.remove('show');
    passwordInput.classList.remove('red-border');
  }
}
