const email = document.getElementById('email');
const error = document.getElementById('error');

email.addEventListener('blur', validateEmail);
email.addEventListener('focus', () => {
  email.classList.add('focused');
  error.style.display = 'none';
});

function validateEmail(e) {
  let value = this.value;
  let valid_email = RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
  // Test value of email input against RegExp
  if (valid_email.test(value)) {
    e.target.classList.remove('invalid');
    e.target.classList.add('valid');
    error.style.display = 'none';
  } else {
    e.target.classList.remove('valid');
    e.target.classList.add('invalid');
    error.style.display = 'block';
  }
  email.classList.remove('focused');
}
