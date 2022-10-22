const form = document.querySelector('#form');
const emailElement = document.querySelector('#email');
const errorMsg = document.querySelector('.errorMsg');

// eslint-disable-next-line no-unused-vars
function submitForm(event) {
  if (emailElement.value === emailElement.value.toLowerCase()) {
    form.submit();
    form.reset();
  } else {
    event.preventDefault();
    errorMsg.innerHTML = 'Email address should be in lowercase';
  }
}