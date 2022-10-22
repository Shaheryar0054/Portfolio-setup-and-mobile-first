const form = document.querySelector('#form');
const emailElement = document.querySelector('#email');
const errorMsg = document.querySelector('.errorMsg');
const formButton =document.getElementById('formButton')
formButton.addEventListener("click", submitForm)
// eslint-disable-next-line no-unused-vars
function submitForm(event) {
  event.preventDefault();
  if (emailElement.value === emailElement.value.toLowerCase()) {
    form.submit();
    form.reset();
  } else {
    errorMsg.innerHTML = 'Email address should be in lowercase';
  }
}