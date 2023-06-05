// Pobranie formularza
let form = document.getElementById('registrationForm');

form.addEventListener('submit', function(event) {
  // Pobranie wartości z pól formularza
  let password = document.getElementById('password').value;
  let confirmPassword = document.getElementById('confirm_password').value;

  // Sprawdzenie czy hasła są takie same
  if (password !== confirmPassword) {
    alert("Hasła nie są takie same!");
    event.preventDefault();
  } else {
    // Walidacja hasła (np. sprawdzenie długości hasła)
    if (password.length < 8) {
      alert("Hasło musi mieć co najmniej 8 znaków!");
      event.preventDefault();
    } else {
      alert("Rejestracja zakończona pomyślnie!");
    }
  }
});
// Zdefiniujmy klasę Użytkownik, która będzie reprezentować użytkownika i będzie zawierać odpowiednie metody
class Uzytkownik {
    constructor(imie, nazwisko, email, dodatkoweInfo1, dodatkoweInfo2, dodatkoweInfo3) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.email = email;
        this.dodatkoweInfo1 = dodatkoweInfo1;
        this.dodatkoweInfo2 = dodatkoweInfo2;
        this.dodatkoweInfo3 = dodatkoweInfo3;
    }

    // Metoda zwracająca dane użytkownika jako tablicę
    doTablicy() {
        return [this.imie, this.nazwisko, this.email, this.dodatkoweInfo1, this.dodatkoweInfo2, this.dodatkoweInfo3];
    }

    // Metoda zwracająca dane użytkownika jako JSON
    doJSON() {
        return JSON.stringify(this);
    }
}

// Teraz stworzymy przykładowego użytkownika
let uzytkownik = new Uzytkownik("Jan", "Kowalski", "jan.kowalski@example.com", "info1", "info2", "info3");

// Teraz możemy zobaczyć dane użytkownika w różnych formach
console.log(uzytkownik.doTablicy());  // w formie tablicy
console.log(uzytkownik.doJSON());  // w formie JSON
console.log(uzytkownik);  // jako obiekt

class Wynagrodzenie {
    constructor(stawka, godziny) {
        this.stawka = stawka;
        this.godziny = godziny;
    }

    obliczBruttoMiesieczne() {
        return this.stawka * this.godziny * 4; // załóżmy, że miesiąc ma 4 tygodnie
    }

    obliczNettoMiesieczne() {
        const brutto = this.obliczBruttoMiesieczne();
        const podatek = 0.18; // przykładowy podatek, powinno to być zależne od kraju i innych czynników
        const netto = brutto * (1 - podatek);
        return netto;
    }

    wyswietlWynagrodzenie() {
        const netto = this.obliczNettoMiesieczne();
        console.log(`Twoje miesięczne wynagrodzenie netto wynosi: ${netto}`);
        alert(`Twoje miesięczne wynagrodzenie netto wynosi: ${netto}`);

        // Teraz dodajemy informację do elementu HTML na stronie
        let wynagrodzenieElement = document.getElementById("wynagrodzenie");
        if (wynagrodzenieElement) {
            wynagrodzenieElement.innerText = `Twoje miesięczne wynagrodzenie netto wynosi: ${netto}`;
        }
    }
}

let wynagrodzenie = new Wynagrodzenie(20, 40); // załóżmy, że stawka to 20 za godzinę, a pracujemy 40 godzin na tydzień
wynagrodzenie.wyswietlWynagrodzenie();

document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (!emailRegex.test(email)) {
        alert("Invalid email format.");
        return;
    }

    if (!passwordRegex.test(password)) {
        alert("Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters.");
        return;
    }

    alert("Form submitted successfully.");
});