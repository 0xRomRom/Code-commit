// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);


// if(hasDriversLicense && hasGoodVision) {
//     console.log('Allowed to drive!');
// } else {
//     console.log('Not allowed');
// }

// const isTired = false; // C
// console.log(hasDriversLicense || hasGoodVision || isTired);


// if(hasDriversLicense && hasGoodVision && !isTired) {
//     console.log('Allowed to drive!');
// } else {
//     console.log('Not allowed');
// }

/////////////////////////////////////


// const scoreDolphins = (97 + 112 + 81) / 3;
// const scoreKoalas = (109 + 95 + 86) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if(scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//     console.log('Dolphins win');
// } else if(scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//     console.log("Koala's win");
// } else if (scoreKoalas===scoreDolphins && scoreKoalas >= 100 && scoreDolphins >= 100) {
//     console.log('Both win');
// } else {
//     console.log('Nobody wins');
// }


///////////////////////////////////////////

// let day = 'tuesday';
// let monday = 'Plan course structure';
// let tuesday = 'Prepare theory videos'

// Use switch statements instead of if/else

// switch(day) {
//     case 'monday': // day === 'monday' if true code will be executed
//         console.log('Plan course structure');
//         console.log('Go to coding meeting');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('I record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend :D');
//         break;
//     default:
//         console.log('Not a valid day!');
// }


// if(day === 'monday') {
//     console.log('Plan course structure');
//     console.log('Go to coding meeting');
// } else if(day === 'tuesday') {
//     console.log('Write code examples');
// } else if(day === 'wednesday' || 'thursday') {
//     console.log('I record videos');
// } else if(day === 'friday') {
//     console.log('Enjoy the weekend :D');
// } else if(day === 'saturday' || day === 'sunday') {
//     console.log('Enjoy the weekend') ;
// } else {
//     console.log('invalid');
// }

////////////////////////////////////////////////


// const age = 18;
// age >= 18 ? console.log('I like to drink wine') : 
// console.log('I like to drink water');

// const drink = age >= 18 ? 'Wine' : 'Water';
// console.log(drink);

// let drink2;

// if(age>= 18) {
//     drink2= 'wine';
// } else {
//     drink2= 'water';
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? 'Wine' : 'Water'}`);



//////////////////////////////////////////////////////

// const population =  33;
// population >= 33 ? console.log("Portugal's population is above average") : console.log("Portugal's population is below average");



///////////////////////////////////////////////////////

//Bill Calculator

// const bill = 250;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.20;
// console.log (`The bill was ${bill}, the tip was ${tip}, and the total was ${bill + tip}`);

///////////////////////////////////////////////////////


//Function basics

// function logger() {
//     console.log('My name is Roman');
// }
// // calling / running / invoking function
// logger();


// function fruitProcessor(apples, oranges) {
//     const juice = `juice with ${apples} apples and ${oranges} oranges. `;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);


/////////////////////////////////////////////////////////

// //Function declaration
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);


// //Function expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1991);
// console.log(age1, age2);

// //Expressions return values

//////////////////////////////////////////////////////////

// //Arrow Function

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1995);
// console.log(age3);

///////////////////////////////////////////////////////////

//Years untill retirement calculator

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1995, 'Roman'));
// console.log(yearsUntilRetirement(1980, 'Bob'));

///////////////////////////////////////////////////////////

// //Variable Country data

// function describeCountry(country, population, capitalCity) {
//     return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// }

// const descNetherlands = describeCountry('Netherlands', 16, 'Amsterdam');
// const descFrance = describeCountry('France', 61, 'Paris');
// const descGermany = describeCountry('Germany', 100, 'Berlin');
// console.log(descNetherlands, descFrance, descGermany);

//////////////////////////////////////////////////////////////

// // //Calculate population percentage per country


// //Function declaration (delete 2's to enable)

// function percentageOfWorld2 (population2) {
//     return (population / 7900) * 100;
// }

// //Function expression
// const percentageOfWorld1 = function (population) {
//     return (population / 7900) * 100;
// }


// const percentageNetherlands = percentageOfWorld1(500);
// const percentageGermany = percentageOfWorld1(300);
// console.log(percentageNetherlands, percentageGermany);

//////////////////////////////////////////////////////////////

// //Arrow functions

// const percentageOfWorld3 = population => (population / 7900) * 100;
// const percPortugal3 = percentageOfWorld3(10);
// const percChina3 = percentageOfWorld3(1441);
// const percUSA3 = percentageOfWorld3(332);
// console.log(percPortugal3, percChina3, percUSA3);

///////////////////////////////////////////////////////////////

// //Function inside a function


// function cutFruitPieces(fruit) {
// return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
// const applePieces = cutFruitPieces(apples);
// const orangePieces = cutFruitPieces(oranges);

// const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

/////////////////////////////////////////////////////////////////

// function percentageOfWorld1(population) {
//     return (population / 7900) * 100;
// }

// function describePopulation(country, population) {
// const percentage = percentageOfWorld1(population);
// const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
// console.log(description);
// };

// describePopulation('Portugal', 10);
// describePopulation('China', 1441);
// describePopulation('USA', 332);

//////////////////////////////////////////////////////////////////


// const calcAverage = (a, b, c) => (a + b+ c) / 3;\
// const avgDolphins = calcAverage(44, 23, 71);
// const avgKoalas = calcAverage(65, 54, 49);


// console.log(avgDolphins, avgKoalas);


// const checkWinner = function(avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//     } else{
//         console.log('No one wins');
//     }
// }

// checkWinner(avgDolphins, avgKoalas);

///////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////

//Object with literal template 

// const myCountry = {
//     country: 'Netherlands',
//     capital: 'Amsterdam',
//     language: 'Dutch',
//     population: '17 Million',
//     neighbours: ['Germany', 'Belgium', 'France']
// };

// console.log(`${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);


/////////////////////////////////////////////////////////////////////

//BMI calculation using methods in objects

// const mark = {
//     firstName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function() {
//       this.bmi = this.mass / this.height ** 2;
//       return this.bmi;
//     }
// };


// const john = {
//     firstName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function() {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// };

// mark.calcBMI();
// john.calcBMI();
// console.log(`Hello ${mark.bmi}, what's good ${john.bmi}`);

////////////////////////////////////////////////////////////////////////

//For loop


// for( let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

/////////////////////////////////////////////////////////////////////////