const loginButton = document.getElementById("loginButton");
const registerButton = document.getElementById("registerButton");
const loginForm = document.getElementById("form");
const registerForm = document.getElementById("form1");

loginButton.addEventListener("click", function() {
    loginForm.style.display = "block";
    registerForm.style.display = "none";
});

registerButton.addEventListener("click", function() {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
});

function login() {
    // Logika logowania
}

function register() {
    // Logika rejestracji
}


const nameField = document.querySelector("[username='username']");
nameField.addEventListener('input', () => {
    requiredValidation(nameField);
    minLengthValidation(nameField, 2);
});