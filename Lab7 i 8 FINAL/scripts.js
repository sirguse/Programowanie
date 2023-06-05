function hasValue(field) {
  return field.value !== "";
}

function isValidLength(field, minLength) {
  return field.value.length >= minLength;
}

function isValidEmail(email) {
  let re = /\S+@\S+\.\S+/;
  return re.test(email.value);
}

function passwordComplexity(password) {
  // simple check for complexity (8 characters, uppercase, lowercase, number)
  let re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
  return re.test(password.value);
}

document.querySelector('#registrationForm').addEventListener('submit', function(e) {
  e.preventDefault();
  let fields = e.target.elements;
  for(let i = 0; i < fields.length; i++) {
      let field = fields[i];
      if(!hasValue(field)) {
          field.setCustomValidity("To pole jest wymagane");
      } else if(field.name === 'password' && !passwordComplexity(field)) {
          field.setCustomValidity("Hasło musi zawierać co najmniej 8 znaków, w tym wielkie litery i cyfry");
      } else if(field.name === 'email' && !isValidEmail(field)) {
          field.setCustomValidity("Podaj poprawny adres email");
      } else {
          field.setCustomValidity("");
      }
  }

  if(e.target.checkValidity()) {
      alert("Formularz poprawnie wypełniony");
  }
});
document.querySelector('#sameAddress').addEventListener('change', function(e) {
  let mailingAddressSection = document.querySelector('#mailingAddressSection');
  let mailingAddressInput = mailingAddressSection.querySelector('input');
  if(e.target.checked) {
      mailingAddressSection.style.display = 'none';
      mailingAddressInput.disabled = true;
  } else {
      mailingAddressSection.style.display = 'block';
      mailingAddressInput.disabled = false;
  }
});

document.querySelector('#country').addEventListener('change', function(e) {
  let stateInput = document.querySelector('#state');
  let residenceAddressInput = document.querySelector('#residenceAddress');
  let mailingAddressInput = document.querySelector('#mailingAddress');
  if(e.target.value) {
      stateInput.disabled = false;
      if(stateInput.value) {
          residenceAddressInput.disabled = false;
          if(!document.querySelector('#sameAddress').checked) {
              mailingAddressInput.disabled = false;
          }
      }
  } else {
      stateInput.disabled = true;
      residenceAddressInput.disabled = true;
      mailingAddressInput.disabled = true;
  }
});

document.querySelector('#state').addEventListener('change', function(e) {
  let residenceAddressInput = document.querySelector('#residenceAddress');
  let mailingAddressInput = document.querySelector('#mailingAddress');
  if(e.target.value) {
      residenceAddressInput.disabled = false;
      if(!document.querySelector('#sameAddress').checked) {
          mailingAddressInput.disabled = false;
      }
  } else {
      residenceAddressInput.disabled = true;
      mailingAddressInput.disabled = true;
  }
});
document.querySelector('#country').addEventListener('change', function(e) {
  let stateInput = document.querySelector('#state');
  if(e.target.value === 'Polska') {
      let selectElement = document.createElement('select');
      selectElement.id = 'state';
      selectElement.name = 'state';
      let states = ['Dolnośląskie', 'Kujawsko-Pomorskie', 'Lubelskie', 'Lubuskie', 'Łódzkie', 'Małopolskie', 'Mazowieckie', 'Opolskie', 'Podkarpackie', 'Podlaskie', 'Pomorskie', 'Śląskie', 'Świętokrzyskie', 'Warmińsko-Mazurskie', 'Wielkopolskie', 'Zachodniopomorskie'];
      for(let state of states) {
          let optionElement = document.createElement('option');
          optionElement.value = state;
          optionElement.text = state;
          selectElement.appendChild(optionElement);
      }
      stateInput.replaceWith(selectElement);
  } else {
      let textInput = document.createElement('input');
      textInput.type = 'text';
      textInput.id = 'state';
      textInput.name = 'state';
      stateInput.replaceWith(textInput);
  }
});
document.querySelector('#phone').addEventListener('input', function(e) {
  e.target.value = e.target.value.replace(/\D/g, '');
});