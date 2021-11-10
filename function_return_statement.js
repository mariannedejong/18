//checking if a number is big: this is a function that does something
const checkNumber = function (number){
    if (number>100){
        return true;
    } else return false;
}

const number1 = checkNumber(110);
console.log(number1);

//bouncer at a club: this is a function that produces something
const whatBrendaShouldTell = function (maximumVisitors, currentVisitors, visitorsAge){
    if (maximumVisitors>currentVisitors && visitorsAge>=18){
        return "Come in";
    } else if(maximumVisitors<=currentVisitors && visitorsAge>=18){
        return "It's too busy now, come back later"
    } else {return "This is a club for adults" }
}

const maximumVisitors = 100;
let currentVisitors = 90;
let visitorsAge = 19;

let brendaTells = whatBrendaShouldTell(maximumVisitors, currentVisitors, visitorsAge);
console.log (brendaTells);

//calculating the average: this is a function that does something
const calculateAverage = function (number1, number2, number3, number4, number5){
    let sum = number1+number2+number3+number4+number5;
    return sum/5;
}

let average = calculateAverage(2.2, 6.5, 3.7, 5.9, 6.2);
console.log(Math.round(average));