const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

let loginSubmit = document.getElementById("login-submit");
loginSubmit.addEventListener("click", loginFormHandler)

let signupSubmit = document.getElementById("signup-submit");
signupSubmit.addEventListener("click", signupFormHandler);

// document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

// document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);

// Variables and functions to switch between sign up and login screen.
let signupContainer = document.getElementById("signup-container");
let loginContainer = document.getElementById("login-container");

let loginSpanClick = document.querySelector(".login-here-span");
let signupSpanClick = document.querySelector(".signup-here-span");

function displayLoginForm (){
    loginContainer.classList.remove("hide");
    signupContainer.classList.add("hide")
};

function displaySignUpForm () {
    loginContainer.classList.add("hide");
    signupContainer.classList.remove("hide")
}
loginSpanClick.addEventListener("click", displayLoginForm);
signupSpanClick.addEventListener("click", displaySignUpForm);