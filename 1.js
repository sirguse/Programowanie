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

let s1=6;
let s2=8;
let s3=10;

let p= (s1+s2+s3) /2;
let area = Math.sqrt(p*(p-s1)*(p-s2)*(p-s3));
console.log(area)

//Zadanie 3

gnum=Math.ceil(Math.random()*10);
console.log(gnum);
let num =prompt("Podaj liczbę: ");

if(gnum == num){
    //instrukcja
    console.log("Dobra robota!");
}
else{
    console.log("Spróbuj ponownie!")
}

//Zadanie 4

let num1 =parseFloat(prompt("Podaj 1 liczbę: "));
let num2 =parseFloat(prompt("Podaj 2 liczbę: "));
let num3 =parseFloat(prompt("Podaj 3 liczbę: "));

if(num1>num2 && num1>num3){
    console.log("Największa jest pierwsza liczba: "+num1);

}if(){

}