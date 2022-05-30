const input = document.querySelector('.input');
const icon = document.querySelector('.error-icon');
const errorMessage = document.querySelector('.email-error-text');
const button = document.querySelector('.button');

button.addEventListener('click', function (e) {
  e.preventDefault();
  input.classList.remove('invalid');
  icon.classList.remove('invalid');
  errorMessage.classList.remove('invalid');

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!input.value.match(emailRegex)) {
    input.classList.add('invalid');
    icon.classList.add('invalid');
    errorMessage.classList.add('invalid');
    errorMessage.innerText = 'Please provide a valid email';
  }

  if (input.value === '') {
    errorMessage.innerText = 'Whoops! missing email address';
  }
});
