const tablica = [1,2,3,4,5,6,7,8,9,10]

//a) Sumowanie
const suma = tablica.reduce((a,b) => a+b);
console.log(suma)


//b) Parzystosc
const parzysta = tablica.filter(element => element %2 === 0);
console.log(parzysta)

//c) Mnozenie
const mnozenie = tablica.map(element => element*2);
console.log(mnozenie)

//d) Dodanie numeru albumu
const NumerAlbumu = [6,8,4,6,9]

const dodawanie = tablica.concat(NumerAlbumu)
console.log(dodawanie)


//e) Obliczanie średniej arytmetycznej

const suma1 = tablica.reduce((a,b) => a + b);
let srednia = suma1 / tablica.length;
console.log(srednia)


//f) Najwieksza liczba
let NajwiekszaLiczba = Math.max(...tablica)
console.log(NajwiekszaLiczba)

//g) Zliczenie wystapien wybranej wartosci
let WybranaWartość = 4;
let licznik = 0;

for (let i = 0; i < tablica.length; i++){
    if(tablica[i] === WybranaWartość){
        licznik++;
    }
}
console.log(licznik)
//


//Zadanie 1


class Prostokąt {
    constructor(wysokość, szerokość, nazwa){
        this.wysokość = wysokość;
        this.szerokość = szerokość;
        this.nazwa = nazwa;
    }
    obwod() {
        return (2 * this.wysokość) + (2 * this.szerokość);
    }
    pole() {
        return this.wysokość * this.szerokość;
    }
    nowy(nowaNazwa) {
        this.nazwa = nowaNazwa;
    }

}

class Trójkąt {
    constructor(wysokość, długośćPodstawy, nazwa){
        this.wysokość = wysokość;
        this.długośćPodstawy = długośćPodstawy;
        this.nazwa = nazwa;
    }
    pole() {
        return (this.długośćPodstawy * this.wysokość) / 2;
    }
}

class Trapez {
    constructor(wysokość, podstawa1, podstawa2, nazwa){
        this.wysokość = wysokość;
        this.podstawa1 = podstawa1;
        this.podstawa2 = podstawa2;
        this.nazwa = nazwa;
    }
    pole() {
        return (this.podstawa1 + this.podstawa2) * this.wysokość / 2;
    }
}

function najwiekszaFigura(prostokąt, trójkąt, trapez) {
    const prostokątPole = prostokąt.pole();
    const trójkątPole = trójkąt.pole();
    const trapezPole = trapez.pole();

    if(prostokątPole > trójkątPole && prostokątPole > trapezPole) {
        console.log(`Największa figura to: ${prostokąt.nazwa}, z polem: ${prostokątPole}`);
    } else if(trójkątPole > prostokątPole && trójkątPole > trapezPole) {
        console.log(`Największa figura to: ${trójkąt.nazwa}, z polem: ${trójkątPole}`);
    } else {
        console.log(`Największa figura to: ${trapez.nazwa}, z polem: ${trapezPole}`);
    }
}

let prostokąt1 = new Prostokąt(2, 3, "Prostokąt1");
let trójkąt1 = new Trójkąt(3, 4, 5, "Trójkąt1");
let trapez1 = new Trapez(2, 4, 6, "Trapez1");




function MaxObwod(Prostokat1, Prostokat2){
    let obwod1 = (2*Prostokat1.wysokość) + (2*Prostokat1.szerokość)
    let obwod2 = (2*Prostokat2.wysokość) + (2*Prostokat2.szerokość)

    if (obwod1 > obwod2){
        return Prostokat1
    }
    else{
        return Prostokat2
    }
}

let prostokąt = new Prostokąt(10, 20, "Prostokąt 1");
let trójkąt = new Trójkąt(10, 20, "Trójkąt 1");
let trapez = new Trapez(10, 20, 30, "Trapez 1");

najwiekszaFigura(prostokąt, trójkąt, trapez);

function Obwod(prostokat1, prostokat2) {
    return prostokat1.obwod() > prostokat2.obwod() ? prostokat1 : prostokat2;
}

let prostokątA = new Prostokąt(10, 20, "Prostokąt 1");
let prostokątB = new Prostokąt(6, 3, "Prostokąt 2");

console.log(Obwod(prostokątA, prostokątB).nazwa); // zwraca nazwę prostokąta o większym obwodzie

prostokąt1.nowy("Nowa nazwa prostokąta"); 
console.log(prostokąt1.nazwa); // Nie wiem, problem się pojawia

