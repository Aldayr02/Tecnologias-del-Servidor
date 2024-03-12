// In your script.js file
document.addEventListener('DOMContentLoaded', (event) => {
  const signupButton = document.querySelector('#logInButton');
  signupButton.addEventListener('click', doSomething);
});

function doSomething() {
  // Your code here
  window.location.href = '/users/login';
  console.log('I did something');
}
