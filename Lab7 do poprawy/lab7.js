///
/// Baza
///
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (validForm()) {
        alert('Sukces');
    }
});

///
/// Pola
///

const nameField = document.querySelector("[name='name']");
nameField.addEventListener('input', () => {
    requiredValidation(nameField);
    minLengthValidation(nameField, 2);
});

const surnameField = document.querySelector("[name='surname']");
surnameField.addEventListener('input', () => {
    requiredValidation(surnameField);
    minLengthValidation(surnameField, 2);
});


const emailField = document.querySelector("[name='email']");
emailField.addEventListener('input', () => {
    requiredValidation(emailField);
    minLengthValidation(emailField, 2);
    emailValidation(emailField);
});


const passwordField = document.querySelector("[name='password']");
passwordField.addEventListener('input', () => {
    requiredValidation(passwordField);
});


const sexFields = document.getElementsByName('sex');

sexFields.forEach(field => {
    field.addEventListener('change', () => {
        validSexFileds()
    });
});


const phoneField = document.querySelector("[name='phone']");
phoneField.addEventListener('input', () => {
    requiredValidation(phoneField);
    minLengthValidation(phoneField, 9);
    maxLengthValidation(phoneField, 9);
});

phoneField.addEventListener('keypress', (event) => {
    var charCode = (event.which) ? event.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        event.preventDefault();
    }
    return true;
});

const birthDateField = document.querySelector("[name='birthDate']");
birthDateField.addEventListener('input', () => {
    requiredValidation(birthDateField);
    validAge();
});

const confirmPasswordField = document.querySelector("[name='confirm-password']");
confirmPasswordField.addEventListener('input', () => {
    validConfirmPassword();
});



///
/// Zadanie 2 walidacja
///

function requiredValidation(field) {
    //Zad 3 - span i errorField
    const errorField = document.querySelector(`[name='${field.name}'] + span.error`);
    //
    if (!field.value || field.value === '') {
        //Zad 2
        //field.setCustomValidity('To pole jest wymagane');
        errorField.innerHTML = 'To pole jest wymagane';
        return true;
    }
    else {
        //Zad 2
        //field.setCustomValidity('');
        errorField.innerHTML = '';
        return false;
    }
}

function minLengthValidation(field, minLength = 0) {
    const errorField = document.querySelector(`[name='${field.name}'] + span.error`);
    if (field.value.length < minLength) {
        //Zad 2
        //field.setCustomValidity(`To pole musi mieć conajmniej ${minLength} znaków`);
        errorField.innerHTML = `To pole musi mieć conajmniej ${minLength} znaków`;
        return true;
    }
    else {
        //Zad 2
        //field.setCustomValidity('');
        errorField.innerHTML = '';
        return false;
    }
}

function maxLengthValidation(field, maxLength = 0) {
    const errorField = document.querySelector(`[name='${field.name}'] + span.error`);
    if (field.value.length > maxLength) {
        //Zad 2
        //field.setCustomValidity(`To pole musi mieć najwyżej ${maxLength} znaków`);
        errorField.innerHTML = `To pole może mieć najwyżej ${maxLength} znaków`;
        return true;
    }
    else {
        //Zad 2
        //field.setCustomValidity('');
        errorField.innerHTML = '';
        return false;
    }
}

function validSexFileds() {
    let result = false;

    const errorField = document.querySelector('span.sex.error');

    sexFields.forEach(field => {
        result = field.checked || result;
    });

    errorField.innerHTML = result ? '' : 'Prosze wybrać płeć';

    return !result;
}

function emailValidation(field) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errorField = document.querySelector(`[name='${field.name}'] + span.error`);
    if (!emailRegex.test(field.value)) {
        //Zad 2
        // field.setCustomValidity("Proszę podać poprawny adres e-mail.");
        errorField.innerHTML = 'Proszę podać poprawny adres e-mail.';
        return true;
    }
    else {
        //Zad 2
        //field.setCustomValidity('');
        errorField.innerHTML = '';
        return false;
    }
}

function passwordValidation(field) {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{}|;':",./<>?])[0-9a-zA-Z!@#$%^&*()_+\-=[\]{}|;':",./<>?]{8,}$/;
    const errorField = document.querySelector(`[name='${field.name}'] + span.error`);
    if (!passwordRegex.test(field.value)) {
        //Zad 2
        //field.setCustomValidity("Hasło mieć co najmniej 8 znaków i zawierać przynajmniej jedną cyfrę, jedną małą literę i jedną dużą literę.");
        errorField.innerHTML = 'Hasło mieć co najmniej 8 znaków i zawierać przynajmniej jedną cyfrę, jedną małą literę i jedną dużą literę.';
        return true;
    }
    else {
        //Zad 2
        //field.setCustomValidity('');
        errorField.innerHTML = '';
        return false;
    }
}


///
/// Zadanie 4
///
function validAge() {
    const today = new Date();
    const date = new Date(birthDateField.value);

    var age = today.getFullYear() - date.getFullYear();
    var m = today.getMonth() - date.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < date.getDate())) {
        age--;
    }

    const errorField = document.querySelector('[name="birthDate"] + span.error');

    errorField.innerHTML = age < 18 ? 'Musisz być pełnoletni' : '';

    return age < 18;
}
///
///  Zadanie 5
///
function validConfirmPassword() {
    const errorField = document.querySelector(`[name='confirm-password'] + span.error`);
    if (confirmPasswordField.value !== passwordField.value) {
        errorField.innerHTML = 'Hasła nie są takie same';
        return true;
    }
    else {
        errorField.innerHTML = '';
        return false;
    }
}


function validForm() {
    if (requiredValidation(nameField) || requiredValidation(surnameField) || requiredValidation(emailField)
        || requiredValidation(passwordField) || validSexFileds() || requiredValidation(phoneField) 
        || requiredValidation(birthDateField) || requiredValidation(countyField)
        || minLengthValidation(nameField, 2) || minLengthValidation(surnameField, 2) || minLengthValidation(emailField, 2)
        || minLengthValidation(passwordField, 8) || minLengthValidation(nameField, 2) || minLengthValidation(phoneField, 9)
        || maxLengthValidation(phoneField, 9) || emailValidation(emailField) || passwordValidation(passwordField) || validAge()
        || validConfirmPassword()) {
        return false;
    }

    return true;
}

  
const checkboxField =document.querySelector("[name='MojAdres']");
const contactAddres = document.querySelector(".GuzikNie")

checkboxField.addEventListener('change', () => {
    contactAddres.hidden = checkboxField.checked;
});