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
    Obwod(){
        console.log((2*this.wysokość)+(2*this.szerokość))
    }
    Pole(){
        console.log(this.wysokość*this.szerokość)
    }
    Porownanie(Pole2){
        let pole1 = this.Pole() // Chyba zeby to dzialalo musialbym uzyc return, ale zostawiam to tak jak jest
        let pole2 = Pole2.Pole();

        if (pole1 > pole2){
            
            console.log("Pole1 jest wieksze")
        }
        else{
            
            console.log("Pole2 jest wieksze")
        }
    }
}

class Trójkąt {
    constructor(wysokość, długość, podstawy, nazwa){
        this.wysokość = wysokość;
        this.długość = długość;
        this.podstawy = podstawy;
        this.nazwa = nazwa;
    }
    Pole(){
        let pole = (this.długość*this.wysokość)/2
        return (pole);
        //console.log("Pole trójkąta wynosi: ",pole)
    }
    Porownanie(Pole2){
        if (this.Pole()> Pole2.Pole()){
            return this;
        }
        else{
            return Pole2
        }
    }
}

class Trapez {
    constructor(wysokość, podstawa1, podstawa2, nazwa){
        this.wysokość = wysokość;
        this.podstawa1 = podstawa1;
        this.podstawa2 = podstawa2;
        this.nazwa = nazwa;
    }
    PoleTrapezu(){
        return (this.podstawa1 + this.podstawa2) * this.wysokość / 2;
    }
    
}


function MaxFigura(Prostokąt,Trójkąt,Trapez){
    let ProstokątPole = Prostokąt.Pole();
    let TrójkątPole = Trójkąt.Pole()
    let TrapezPole = Trapez.PoleTrapezu()

    let maxPole = Math.max(ProstokątPole, TrójkątPole, TrapezPole);

    if (maxPole == ProstokątPole){
        console.log("Największa figura to Prostokąt o polu: ", maxPole);
    }
    else if (maxPole == TrójkątPole){
        console.log("Największa figura to Trójkąt o polu: ", maxPole);
    }
    else{
        console.log("Największa figura to Trapez o polu: ", maxPole);
    }

}

let prostokąt1 = new Prostokąt(2, 3, "Prostokąt1");
let trójkąt1 = new Trójkąt(3, 4, 5, "Trójkąt1");
let trapez1 = new Trapez(2, 4, 6, "Trapez1");

MaxFigura(prostokąt1, trójkąt1, trapez1);


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

let prostokąt1 = new Prostokąt(2, 3, "Prostokąt1");
let prostokąt2 = new Prostokąt(4, 5, "Prostokąt2");

let maxObwod = MaxObwod(prostokąt1, prostokąt2);