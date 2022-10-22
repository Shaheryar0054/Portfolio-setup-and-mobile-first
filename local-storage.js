const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const msgBox = document.getElementById('text-1');

function fired() {
  // object where input data is stored
  const strg = {
    name: `${nameField.value}`,
    email: `${emailField.value}`,
    message: `${msgBox.value}`,
  };

  // storing data in local storage
  const json = JSON.stringify(strg);
  localStorage.formData = json;

  // retrieving data from local storage
  const stored = localStorage.formData;
  const prsData = JSON.parse(stored);

  if (localStorage.formData) {
    nameField.value = prsData.name;
    emailField.value = prsData.email;
    msgBox.value = prsData.message;
  }
}

if (typeof (Storage) !== 'undefined') {
  const btn = document.getElementById('formButton');
  btn.addEventListener('click', fired);
}
