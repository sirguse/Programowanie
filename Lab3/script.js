// Zadanie 1

var a = 20;
var b = 10;

var add = a+b;
var sub = a-b;
var mul = a*b;
var div = a/b;
var mod = a%b;

// a)
console.log(add);
console.log("Wynik odejmowania to: "+sub);
console.log(mul);
console.log(div);
console.log(mod);

// b)
document.getElementById("addR").innerHTML = "Dodawanie: "+add;
document.getElementById("addA").innerHTML = "Odejmowanie: "+sub;
document.getElementById("addB").innerHTML = "Mnożenie: "+mul;
document.getElementById("addC").innerHTML = "Dzielenie: "+div;
document.getElementById("addD").innerHTML = "Modulo: "+mod;

//Zadanie2
let s1=6;
let s2=8;
let s3=10;

let p= (s1+s2+s3) /2;
let area = Math.sqrt(p*(p-s1)*(p-s2)*(p-s3));
document.getElementById("pole1").innerHTML = "Pole trójkąta 1 wynosi: "+p; 
document.getElementById("pole2").innerHTML = "Pole trójkąta 2 wynosi: "+area;





//Zadanie 3

gnum=Math.ceil(Math.random()*10);
console.log(gnum);
let num =prompt("Podaj liczbę: ");

if(gnum == num){
    //instrukcja
    console.log("Dobra robota!");
    document.getElementById("ans").innerHTML = "Odpowiedz: Dobra robota!";
}
else{
    console.log("Spróbuj ponownie!")
    document.getElementById("ans").innerHTML = "Odpowiedz: Sprobuj ponownie!";
}

//Zadanie 4

let num1 =parseFloat(prompt("Podaj 1 liczbę: "));
let num2 =parseFloat(prompt("Podaj 2 liczbę: "));
let num3 =parseFloat(prompt("Podaj 3 liczbę: "));
let max = Math.max(parseFloat(num1), parseFloat(num2), parseFloat(num3));
//*
//if(num1>num2 && num1>num3){
//        console.log("Największa jest pierwsza liczba: "+num1);


console.log(max);
    document.getElementById("max").innerHTML =
      "najwyższa liczba z podanych to: " + max;

//Zadanie 5
let z =parseFloat(prompt("Podaj 1 liczbę do sprawdzenia NWD: "));
let x =parseFloat(prompt("Podaj 2 liczbę do sprawdzenia NWD: "));
function nwd(z, x) { 
    if (x == 0) 
        return z; 
    return nwd(x, z % x);  
} 
let wynik =nwd(z, x)
console.log("NWD(" + z + "," + x + ") = " + wynik);

document.getElementById("NWD").innerHTML = "Najwiekszy wspolny dzielnik z "+ z + "," + x +" = " + wynik;


//Zadanie 6
const student1 = {
    name: 'Adam',
    surname: 'Małysz',
    age: 22
};

const student2 = {
    name: 'Krzysztof',
    surname: 'Krawczyk',
    age: 20
};

const student3 = {
    name: 'Mariusz',
    surname: 'Pudzianowski',
    age: 25
};

student1.subject = 'Skoczek';
student2.subject = 'Piosenkarz';
student3.subject = 'Strongman';
//zadanie 7

function submit() {
    const name = document.getElementById('Imie').value;
    const surname = document.getElementById('Nazwisko').value;
    const age = document.getElementById('Wiek').value;
    const subject = document.getElementById('Temat').value;

    const student = {
        name: name,
        surname: surname,
        age: age,
        subject: subject
    };
    const StudentData = `Imie: ${student.name}<br>Nazwisko: ${student.surname}<br>Wiek: ${student.age}<br>Temat: ${student.subject}`;
    document.getElementById('StudentData').innerHTML = StudentData;
    document.getElementById('Imie').innerHTML = student.name;
    document.getElementById('Nazwisko').innerHTML = student.surname;
    document.getElementById('Wiek').innerHTML = student.age;
    document.getElementById('Temat').innerHTML = student.subject; 
}
