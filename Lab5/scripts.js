//Zadanie 1
function TabliczkaMnozenia(){
    var tabela = document.getElementById("tabliczka_mnozenia");
    tabela.innerHTML="";
    for (var i=1; i<=10;i++){
        var wiersz=document.createElement("tr");
        for(var j = 1; j<=10; j++){
            var komorka = document.createElement("td");
            komorka.textContent = i *j;
            wiersz.appendChild(komorka);
        }
        tabela.appendChild(wiersz);
    }
}


//Zadanie 2
function rand_pers() {
    var name, surname;
    var gend = Math.floor(Math.random() * 2);
    if (gend == 0) {
      name = m_names[Math.floor(Math.random() * m_names.length)];
      surname = m_surnames[Math.floor(Math.random() * m_surnames.length)];
    } else {
      name = w_names[Math.floor(Math.random() * w_names.length)];
      surname = w_surnames[Math.floor(Math.random() * w_surnames.length)];
    }
    var number = Math.floor(Math.random() * 300);
    console.log(name + " " + surname + " " + number);
  }



var m_names = ["Mateusz", "Lukasz", "Pawel","Michal", "Krzysztof", "Marek"];
var w_names = ["Martyna", "Joanna", "Natalia", "Izabela", "Weronika"];
var m_surnames = ["Kowalczyk", "Nowak", "Kowalski", "Szczepanski", "Jankowski"]
var w_surnames = ["Majewska", "Wrobel", "Tomczak","Wojciechowska","Rutkowska"]
/*
function rand_pers(){
    var name, surname;
    var gend = Math.floor(Math.random()*2);
    if (gend ==0) {
        name = m_names[Math.floor(Math.random()*m_names.lenght)];
        surname = m_surnames[Math.floor(Math.random()* m_surnames.lenght)];
        
    }else{
        name = w_names[Math.floor(Math.random()*w_names.lenght)];
        surname = w_surnames[Math.floor(Math.random()*w_surnames.lenght)];
    }
    
}var number = Math.floor(Math.random()* 300)

*/
var uzytkownicy = [
	{
		imie: "Jan",
		nazwisko: "Kowalski",
		pin: "1234",
		stanKonta: 1000
	},
	{
		imie: "Anna",
		nazwisko: "Nowak",
		pin: "5678",
		stanKonta: 500
	}
];

// Funkcja logująca użytkownika i wyświetlająca jego dane
function logowanie() {
	var pinInput = document.getElementById("pin");
	var pin = pinInput.value;
	pinInput.value = "";

	// Sprawdzenie, który użytkownik ma podany numer PIN
	var uzytkownik;
	for (var i = 0; i < uzytkownicy.length; i++) {
		if (uzytkownicy[i].pin === pin) {
			uzytkownik = uzytkownicy[i];
			break;
		}
	}

	// Jeśli podany numer PIN jest niepoprawny
	if (!uzytkownik) {
		alert("Niepoprawny numer PIN!");
		return;
	}

	// Wyświetlenie danych użytkownika
	document.getElementById("imieNazwisko").textContent = uzytkownik.imie + " " + uzytkownik.nazwisko;
	document.getElementById("stanKonta").textContent = uzytkownik.stanKonta;
	document.getElementById("kontener").style.display = "block";
}

function wyplata() {
    var uzytkownik = getAktualnyUzytkownik();
    if (!uzytkownik) return;
    var kwota = prompt("Podaj kwotę do wypłaty:");
    if (!kwota) return;
    kwota = parseFloat(kwota);
    
    // Wpłata gotówki
    uzytkownik.stanKonta -= kwota;
    alert("Wyplacono " + kwota + " zł");
    document.getElementById("stanKonta").textContent = uzytkownik.stanKonta;
    // Funkcja pomocnicza zwracająca obecnie zalogowanego użytkownika
    function getAktualnyUzytkownik() {
        var imieNazwisko = document.getElementById("imieNazwisko").textContent;
        for (var i = 0; i < uzytkownicy.length; i++) {
        if (uzytkownicy[i].imie + " " + uzytkownicy[i].nazwisko === imieNazwisko) {
        return uzytkownicy[i];
        }
        }
        alert("Nie udało się pobrać danych użytkownika!");
        return null;
        }
    }

// Funkcja realizująca wpłatę gotówki
function wplata() {
var uzytkownik = getAktualnyUzytkownik();
if (!uzytkownik) return;
var kwota = prompt("Podaj kwotę do wpłaty:");
if (!kwota) return;
kwota = parseFloat(kwota);

// Wpłata gotówki
uzytkownik.stanKonta += kwota;
alert("Wpłacono " + kwota + " zł");
document.getElementById("stanKonta").textContent = uzytkownik.stanKonta;
// Funkcja pomocnicza zwracająca obecnie zalogowanego użytkownika
function getAktualnyUzytkownik() {
    var imieNazwisko = document.getElementById("imieNazwisko").textContent;
    for (var i = 0; i < uzytkownicy.length; i++) {
    if (uzytkownicy[i].imie + " " + uzytkownicy[i].nazwisko === imieNazwisko) {
    return uzytkownicy[i];
    }
    }
    alert("Nie udało się pobrać danych użytkownika!");
    return null;
    }
}
