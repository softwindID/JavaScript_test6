

// Part 1
var mercedes = {
    name: "Mercedes" ,
    model: "GL450" ,
    engine: 4.0 ,
    year: 2015 ,
    color: "black",
    hp: 300 ,
    forSale: true ,

};
var bmw = {
    name: "BMW" ,
    model: "X6" ,
    engine: 3.0 ,
    year: 2018 ,
    color: "white",
    hp: 313 ,
    forSale: false ,

};
var audi = {
    name: "Audi" ,
    model: "Q7" ,
    engine: 3.0 ,
    year: 2021 ,
    color: "blue",
    hp: 249 ,
    forSale: true ,

};

var year = 2024;

mercedes.carAge = year - mercedes.year;
    alert('mercedes - ' + mercedes.carAge);
bmw.carAge = year - bmw.year;
    alert('bmw ' + bmw.carAge);
audi.carAge = year - audi.year;
    alert('audi ' + audi.carAge);

 var names = mercedes.name + " " + mercedes.model + "," + bmw.name + " " + bmw.model + "," + audi.name + " " + audi.model;
 alert(names)


var averageAge = (audi.carAge + bmw.carAge + mercedes.carAge) / 3 ;
alert('average age ' + averageAge);


 let atLeastOneForSale = mercedes.forSale || bmw.forSale || audi.forSale;
alert("Хотя бы один автомобиль продается?" + "" + atLeastOneForSale);

var allYoungerThanFive = audi.carAge < 5 && bmw.carAge < 5 && mercedes.carAge < 5;
alert("Все авто младше 5 лет?" + " " + allYoungerThanFive);


let atLeastOneHasLittleHp = audi.hp < 250 || bmw.hp < 250 || mercedes.hp < 250;
alert("Хоть один автомобиль имеет менее 250 лошадиных сил?" + "" + atLeastOneHasLittleHp);




// Part 2


let car = audi;


if (car.name === 'Mercedes' && car.model === 'GL450') {
    alert('Мой любимый мерседес!');
}else {
        alert('Это - ' + car.name + ' ' + car.model);

}

if (car.carAge === 0) {
    alert('Новый автомобиль');
}else if (car.carAge <= 3) {
    alert('Свежий автомобиль');
}else {
    alert('Лет этому авто: ' + car.carAge);
}

var consumption = (car.engine > 3.0) ? 'Прожорливый автомобиль' : 'Экономичный автомобиль';

alert(consumption)

var russianColor = car.color;

switch (russianColor) {
    case 'black':
        alert('черный');
        break;
        case 'silver':
        alert('серебристый');
        break;
        case 'red':
        alert('красный');
        break;
        case 'white':
        alert(' белый');
        break;
        case 'gray':
        alert('серый');
        break;
        case 'blue':
        alert('синий');
        break;
    default:
        alert('Невозможно определить цвет автомобиля.');

}

















