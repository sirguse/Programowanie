// Funkcja sprawdzająca czy pole posiada wartość
function checkValue(input, message) {
    if (input.value === "") {
      input.setCustomValidity(message);
      return false;
    } else {
      input.setCustomValidity("");
      return true;
    }
  }
  
  // Funkcja sprawdzająca długość znaków
  function checkLength(input, length, message) {
    if (input.value.length < length) {
      input.setCustomValidity(message);
      return false;
    } else {
      input.setCustomValidity("");
      return true;
    }
  }
  
  // Funkcja sprawdzająca poprawność adresu email
  function checkEmail(input, message) {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(input.value)) {
      input.setCustomValidity(message);
      return false;
    } else {
      input.setCustomValidity("");
      return true;
    }
  }
  
  // Funkcja sprawdzająca trudność hasła
  function checkPassword(input, message) {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    if (!passwordRegex.test(input.value)) {
      input.setCustomValidity(message);
      return false;
    } else {
      input.setCustomValidity("");
      return true;
    }
  }
  
  // Funkcja wywoływana po kliknięciu przycisku zapisz
  function saveForm() {
    const form = document.getElementById("myForm");
    const nameInput = form.elements["name"];
    const surnameInput = form.elements["surname"];
    const emailInput = form.elements["email"];
    const passwordInput = form.elements["password"];
    const genderInput = form.elements["gender"];
    const phoneInput = form.elements["phone"];
    const birthdateInput = form.elements["birthdate"];
    const countryInput = form.elements["country"];
  
    let isValid = true;
  
    isValid &= checkValue(nameInput, "Pole imię nie może być puste.");
    isValid &= checkValue(surnameInput, "Pole nazwisko nie może być puste.");
    isValid &= checkEmail(emailInput, "Nieprawidłowy adres email.");
    isValid &= checkLength(passwordInput, 8, "Hasło musi mieć co najmniej 8 znaków.");
    isValid &= checkValue(genderInput, "Proszę wybrać płeć.");
    isValid &= checkValue(phoneInput, "Pole telefon nie może być puste.");
    isValid &= checkValue(birthdateInput, "Pole data urodzenia nie może być puste.");
    isValid &= checkValue(countryInput, "Proszę wybrać kraj.");
  
    if (isValid) {
      alert("Formularz został poprawnie wypełniony.");
    }
  }