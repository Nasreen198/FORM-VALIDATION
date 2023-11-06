const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const phoneno = document.querySelector('#phoneno');
const password = document.querySelector('#password');
const cpassword= document.querySelector('#cpassword');

form.addEventListener('submit', e => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // trim to remove the whitespaces
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const phonenoValue = phoneno.value.trim();
  const passwordValue = password.value.trim();
  const cpasswordValue = cpassword.value.trim();

  if (usernameValue === '') {
    setErrorFor(username, 'Username is required');
  } else if(usernameValue.length<5) {
    setErrorFor(username, 'Username must not be less than 5 letters');
  }
    else {
    setSuccessFor(username);
  }

  if (emailValue === '') {
    setErrorFor(email, 'Email is required');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Enter a valid email');
  } else {
    setSuccessFor(email);
  }

  if (phonenoValue === '') {
    setErrorFor(phoneno, 'Phone number is required');
  } else if (phonenoValue === '1234567890') {
    setErrorFor(phoneno, 'Phone number should not be 1234567890');
  } else if (!phoneNo(phonenoValue)) {
    setErrorFor(phoneno, 'Enter a valid phone number');
  } else {
    setSuccessFor(phoneno);
  }

  if (passwordValue === '') {
    setErrorFor(password, 'Password is reqiured');
  }  else if(passwordValue.length<8) {
    setErrorFor(password, 'Password must not be less than 8 characters');
  }  else {
    setSuccessFor(password);
  }

  if (cpasswordValue === '') {
    setErrorFor(cpassword, 'Confirm Password is required');
  } else if (passwordValue !== cpasswordValue) {
    setErrorFor(cpassword, 'Passwords does not match');
  } else {
    setSuccessFor(cpassword);
  }
}

function setErrorFor(element, message) {
  const inputGroup = element.parentElement;
  const errorElement= inputGroup.querySelector('.error');
  errorElement.innerText = message;
  inputGroup.classList.add('error')
  inputGroup.classList.remove('success')
}

function setSuccessFor(element) {
    const inputGroup = element.parentElement;
    const errorElement= inputGroup.querySelector('.error');
    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
 
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function phoneNo(phoneno) {
    return /^\d{10}$/.test(phoneno);
}

form.addEventListener("submit", myFunction);

function myFunction() {
  alert("The form was submitted");
}
