// In your script.js file
document.addEventListener('DOMContentLoaded', (event) => {
  const logInButton = document.querySelector('#logInButton');
  logInButton.addEventListener('click', change_to_login);

  const signUpButton = document.querySelector('#singUpButton');
  signUpButton.addEventListener('click', change_to_singup);

  //   const loginSubmit = document.querySelector('#loginSubmit');
  //   loginSubmit.addEventListener('click', login_post);

  const singupSumit = document.querySelector('#singUpSubmit');
  singupSumit.addEventListener('click', (event) => {
    event.preventDefault();
    singup_post();
  });
});

function change_to_login() {
  window.location.href = '/users/login';
  console.log(`Changing to /users/login`);
}

function change_to_singup() {
  window.location.href = '/users/singup';
  console.log(`Changing to /users/singup`);
}

function singup_post() {
  const username = document.querySelector('#usernameInputSingup').value;
  const email = document.querySelector('#emailInputSingup').value;
  const password = document.querySelector('#passwordInputSingup').value;

  console.log(`${username}`);
  console.log(`${email}`);
  console.log(`${password}`);

  fetch('/users/singup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: username,
      email: email,
      password: password,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response}`);
      }
      console.log(`AAAAAA`);
      return response.json();
    })
    .then((response) => {
      console.log(`Successful singup_post - ${response}`);
    })
    .catch((e) => {
      console.log(`Something wrong singup_post - ${e}`);
    });
}

function login_post() {
  console.log(`Log in post`);
}
