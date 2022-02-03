"use strict";

//Hello there reader. This log is basically a repository for my practice exercises.
//Its self written code from all kinds of exercises.

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

// const listOfNeighbours = [
//     ['Canada', 'Mexico'],
//      ['Spain'],
//       ['Norway', 'Sweden', 'Russia']];

// for (let i = 0; i < listOfNeighbours.length; i++) ;
//    for (let y = 0; y < listOfNeighbours[i].length; y++);
//    console.log(`Neighbour: ${listOfNeighbours[i] [y]}`);

// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037-1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

// for( let i = jonas.length - 1; i >= 0; i--) {
//     console.log(i, jonas[i]);
// }

// for (let exercise = 1; exercise < 4 ; exercise++) {
//     console.log(`---------- Starting exercise ${exercise}`);

//     for(let rep = 1; rep < 11; rep++) {
//         console.log(`Lifting weight repetition ${rep}`);
//     }
// }

////////////////////////////////////////////////////////////////////////

//Rom's birthyear-to-age calculator
// const calcAge = function (birthYear) {
//   return 2021 - birthYear;
// };

// const calcAge = (birthYear) => 2021 - birthYear;

// const result = calcAge(1992);
// console.log(result);

/////////////////////////////////////////////////////////////////////////

// const language = "Dutch";
// const country = "The Netherlands";
// const continent = "Europe";
// const population = 10;
// const isIsland = true;

// let newPopulation = population / 2;
// newPopulation++;
// console.log(newPopulation);
// console.log(population > 6);
// console.log(population < 33);

// const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
// console.log(description);

// if (population > 33) {
//   console.log("The Netherlands's population is above average");
// } else {
//   console.log("The Netherlands's population is below average");
// }

////////////////////////////////////////////////////////////////////////

// const language = "English";
// const country = "The Netherlands";
// const continent = "Europe";
// const population = 10;
// const isIsland = false;

// if (language === "English" && population < 50 && isIsland === false) {
//   console.log("You should live in The Netherlands!");
// } else console.log("The Netherlands does not meet your criteria :(");

// console.log(
//     `${country}'s population is ${population > 33 ? "above" : "below"} average`
//   );

///////////////////////////////////////////////////////////////////////

// const describeCountry = function (country, population, capitalCity) {
//   return `${country} has ${population} million people and it's capital city is ${capitalCity}`;
// };

// const holland = describeCountry("The Netherlands", 17, "Amsterdam");
// console.log(holland);

/////////////////////////////////////////////////////////////////////

//Random number game code

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highScore = 0;

// const displayMessage = function (message) {
//   document.querySelector(".message").textContent = message;
// };

// document.querySelector(".check").addEventListener("click", function () {
//   const guess = Number(document.querySelector(".guess").value);
//   console.log(guess, typeof guess);
//   // When nothing is selected
//   if (!guess) {
//     // document.querySelector('.message').textContent = 'No number!';
//     displayMessage("No number!");
//     // When player Wins
//   } else if (guess === secretNumber) {
//     displayMessage("Correct Number!");
//     document.querySelector("body").style.backgroundColor = "#60b347";
//     document.querySelector(".number").style.width = "30rem";
//     document.querySelector(".number").textContent = secretNumber;

//     if (score > highScore) {
//       highScore = score;
//       document.querySelector(".highscore").textContent = highScore;
//     }

//     // When guess is wrong
//   } else if (guess !== secretNumber) {
//     if (score > 1) {
//       displayMessage(guess > secretNumber ? "Too High!" : "Too Low!");
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       displayMessage("You Lost The Game!");
//       document.querySelector(".score").textContent = 0;
//     }
//   }

//   //     // When guess is too high
//   //   } else if (guess > secretNumber) {
//   //     if (score > 1) {
//   //       document.querySelector('.message').textContent = 'Too High!';
//   //       score--;
//   //       document.querySelector('.score').textContent = score;
//   //     } else {
//   //       document.querySelector('.message').textContent = 'You Lost The Game!';
//   //       document.querySelector('.score').textContent = 0;
//   //     }
//   //     // When guess is too low
//   //   } else if (guess < secretNumber) {
//   //     if (score > 1) {
//   //       document.querySelector('.message').textContent = 'Too Low!';
//   //       score--;
//   //       document.querySelector('.score').textContent = score;
//   //     } else {
//   //       document.querySelector('.message').textContent = 'You lost the game!';
//   //       document.querySelector('.score').textContent = 0;
//   //     }
//   //   }

//   document.querySelector(".again").addEventListener("click", function () {
//     score = 20;
//     let secretNumber = Math.trunc(Math.random() * 20) + 1;
//     displayMessage("Start Guessing...");
//     document.querySelector(".score").textContent = score;
//     document.querySelector(".number").textContent = "?";
//     document.querySelector(".guess").value = "";
//     document.querySelector("body").style.backgroundColor = "#222";
//     document.querySelector(".number").style.width = "15rem";
//   });
// });

/////////////////////////////////////////////////////////////////////////

// // Selecting elements
// const player0El = document.querySelector('.player--0');
// const player1El = document.querySelector('.player--1');
// const score0El = document.querySelector('#score--0');
// const score1El = document.querySelector('#score--1');
// const current0El = document.getElementById('current--0');
// const current1El = document.getElementById('current--1');
// const diceEl = document.querySelector('.dice');
// const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');

// let scores = [0, 0];
// let currentScore = 0;
// let activePlayer = 0;
// let playing = true;

// // Starting conditions
// const init = function () {
//   scores = [0, 0];
//   currentScore = 0;
//   activePlayer = 0;
//   playing = true;

//   score0El.textContent = 0;
//   score1El.textContent = 0;
//   current0El.textContent = 0;
//   current1El.textContent = 0;

//   diceEl.classList.add('hidden');
//   player0El.classList.remove('player--winner');
//   player1El.classList.remove('player--winner');
//   player1El.classList.remove('player--active');
//   player0El.classList.add('player--active');
// };
// init();
// const switchPlayer = function () {
//   document.getElementById(`current--${activePlayer}`).textContent = 0;
//   currentScore = 0;
//   activePlayer = activePlayer === 0 ? 1 : 0;
//   player0El.classList.toggle('player--active');
//   player1El.classList.toggle('player--active');
// };

// // Rolling dice functionallity
// btnRoll.addEventListener('click', function () {
//   if (playing) {
//     // 1. Generating a random dice roll
//     const dice = Math.trunc(Math.random() * 6) + 1;
//     console.log(dice);
//     // 2. Display dice
//     diceEl.classList.remove('hidden');
//     diceEl.src = `dice-${dice}.png`;
//     // 3. Check for rolled 1
//     if (dice !== 1) {
//       //Add dice to the current score
//       currentScore += dice;
//       document.getElementById(`current--${activePlayer}`).textContent =
//         currentScore;
//     } else {
//       //Switch to next player
//       switchPlayer();
//     }
//   }
// });

// // Holding number functionallity
// btnHold.addEventListener('click', function () {
//   if (playing) {
//     //1. Add current score to active player's score
//     scores[activePlayer] += currentScore;
//     console.log(scores[activePlayer]);

//     // scores[1] =  scores[1] + currentScore
//     document.getElementById(`score--${activePlayer}`).textContent =
//       scores[activePlayer];
//     //2. Check if player's score is >= 100

//     if (scores[activePlayer] >= 100) {
//       // Finish the game
//       playing = false;
//       diceEl.classList.add('hidden');
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.add('player--winner');
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.remove('player--active');
//     } else {
//       //Switch to the next player
//       switchPlayer();
//     }
//   }
// });

// btnNew.addEventListener('click', function () {
//   init();
// });

/////////////////////////////////////////////////////////////

// function calcAge(birthYear) {
//     const age = 2037 - birthYear;

//     function printAge() {
//       const output = `${firstName}, you are ${age}, born in ${birthYear}`;
//       console.log(output);

//       if (birthYear >= 1981 && birthYear <= 1996) {
//         const str = `Oh, and you're a millenial, ${firstName}`;
//         console.log(str);
//       }
//     }
//     printAge();
//     return age;
//   }

//   const firstName = 'Jonas';
//   calcAge(1991);

////////////////////////////////////////////////////////////////////

// //Variables
// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Jonas';
// let job = 'techer';
// const year = 1991;

// // Functions
// // console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3));
// // console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// // Example

// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

////////////////////////////////////////////////////////////

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

//Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // Nested destructuring
// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values

// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

////////////////////////////////////////////////////////////////////

// const restaurant = {
//     name: 'Classico Italiano',
//     location: 'Via Angelo Tavanti 23, Firenze, Italy',
//     categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//     starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//     mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//     openingHours: {
//       thu: {
//         open: 12,
//         close: 22,
//       },
//       fri: { open: 11, close: 23 },
//       sat: {
//         open: 0,
//         close: 24,
//         // Open 24 hours close: 24, }, }, };
//       },
//     },
//     order: function (starterIndex, mainIndex) {
//       return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//     },
//     orderDelivery: function ({
//       starterIndex = 1,
//       mainIndex = 0,
//       time = '20:00',
//       address,
//     }) {
//       console.log(
//         `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//       );
//     },
//   };
//   restaurant.orderDelivery({
//     time: '22:30',
//     address: 'Via del sole, 21',
//     mainIndex: 2,
//     starterIndex: 2,
//   });

//   restaurant.orderDelivery({
//     address: 'Via del sole, 21',
//     starterIndex: 1,
//   });
//   const { name, openingHours, categories } = restaurant;
//   console.log(name, openingHours, categories);

//   const {
//     name: restaurantName,
//     openingHours: hours,
//     categories: tags,
//   } = restaurant;

//   console.log(restaurantName, hours, tags);
//   // Default values
//   const { menu = [], starterMenu: starters = [] } = restaurant;
//   console.log(menu, starters);

//////////////////////////////////////////////////////////////

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1.
// const [players1, players2] = game.players;
// // console.log(players1, players2);

// // 2.
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// // 3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4.

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// // 5.

// const {
//   odds: { team1, x, team2 },
// } = game;

// console.log(team1, x, team2);

// // 6.

// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored`);
// };
// printGoals('1', '2', '3', '4');

// // 7.
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

////////////////////////////////////////////////////////////////////////

// const gameEvents = new Map([
//     [17, '⚽️ GOAL'],
//     [36, '🔁 Substitution'],
//     [47, '⚽️ GOAL'],
//     [61, '🔁 Substitution'],
//     [64, '🔶 Yellow card'],
//     [69, '🔴 Red card'],
//     [70, '🔁 Substitution'],
//     [72, '🔁 Substitution'],
//     [76, '⚽️ GOAL'],
//     [80, '⚽️ GOAL'],
//     [92, '🔶 Yellow card'],
//   ]);

//   const events = [...new Set(gameEvents.values())];
//   console.log(events);

//   gameEvents.delete(64);

//   for (const [min, value] of gameEvents) {
//     const half = min <= 45 ? 'First' : 'Second';
//     console.log(` [${half} HALF] ${min}: ${value} `);
//   }

//////////////////////////////////////////////////////////////////////

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log('B737'[0]);
// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.lastIndexOf('r'));

// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You got the middle seat');
//   else console.log('You got lucky');
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

///////////////////////////////////////////////////////////////////

// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Schmedtmann',
//   passport: 2324542545,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;
//   if (passenger.passport === 2324542545) {
//     alert('Checked in');
//   } else {
//     alert('Wrong passport!');
//   }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);

//////////////////////////////////////////////////////////////////////////

// SLICE
// console.log(arr.slice(2));
// console.log(arr.slice(2));
// console.log(arr.slice(-2));
// console.log(arr.slice(2, -1));
// console.log(arr.slice());

// //SPLICE
// // console.log(arr.splice(2));
// arr.splice(-1);
// arr.splice(1, 2);
// console.log(arr);

// // REVERSE

// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// // CONCAT

// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// // JOIN

// console.log(letters.join(' - '));

/////////////////////////////////////////////////////////////////////////

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }
// console.log('---FOREACH---');
// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// });

// // 0: function(200)
// // 1: function(450)
// // 2: function(400)
// // ...

///////////////////////////////////////////////////////////////////////////

// // Map
// const currencies = new Map([
//     ['USD', 'United States dollar'],
//     ['EUR', 'Euro'],
//     ['GBP', 'Pound sterling'],
//   ]);

//   currencies.forEach(function (value, key, map) {
//     console.log(`${key}: ${value}`);
//   });

//   // Set

//   const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
//   console.log(currenciesUnique);

//   currenciesUnique.forEach(function (value, key, map) {
//     console.log(`${key}: ${value}`);
//   });

//////////////////////////////////////////////////////////////////////////

// const checkDogs = function (dogsJulia, dogsKate) {
//     const dogsJuliaCorrected = dogsJulia.slice();

//     dogsJuliaCorrected.splice(0, 1);
//     dogsJuliaCorrected.splice(-2);

//     const dogs = dogsJuliaCorrected.concat(dogsKate);
//     console.log(dogs);

//     dogs.forEach(function (dog, i) {
//       if (dog >= 3) {
//         console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
//       } else {
//         console.log(`Dog number ${i + 1} is still a puppy 🐶`);
//       }
//     });
//   };

//   checkDogs([4, 1, 15, 8, 3], [3, 5, 2, 12, 7]);
//   checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

////////////////////////////////////////////////////////////////////////

//Filter method

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });

// console.log(movements);
// console.log(deposits);

// const depositsFor = [];
// for (const mov of movements) if (mov > 0) depositsFor.push(mov);

// console.log(depositsFor);

// const withdrawals = movements.filter(function (mov) {
//   return mov < 0;
// });

// console.log(withdrawals);

////////////////////////////////////////////////////////////////////////

// const calcAverageHumanAge = function (ages) {
//     const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//     const adults = humanAges.filter(age => age >= 18);
//     console.log(humanAges);
//     console.log(adults);

//     // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

//     const average = adults.reduce(
//       (acc, age, i, arr) => acc + age / arr.length,
//       0
//     );

//     return average;
//   };

//   const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

//   const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

//   console.log(avg1);
//   console.log(avg2);

//////////////////////////////////////////////////////////////////////

// const max = movements.reduce((acc, mov) => {
//     if (acc > mov) return acc;
//     else return mov;
//   }, movements[0]);

//   console.log(max);

//   const eurToUsd = 1.1;

//   const totalDepositsUSD = movements
//     .filter(mov => mov > 0)
//     .map(mov => mov * eurToUsd)
//     .reduce((acc, mov) => acc + mov, 0);
//   console.log(totalDepositsUSD);

//   // const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//   const firstWithdrawal = movements.find(mov => mov < 0);
//   console.log(movements);
//   console.log(firstWithdrawal);

//   console.log(accounts);

//   const account = accounts.find(acc => acc.owner === 'Jessica Davis');
//   console.log(account);

//////////////////////////////////////////////////////////////////////

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// //Equality
// console.log(movements);
// console.log(movements.includes(-130));

// //Some:  Condition

// console.log(movements.some(mov => mov === -130));
// const anyDeposits = movements.some(mov => mov > 1500);
// console.log(anyDeposits);

// // Every
// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));

// // Seperate callback
// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

//////////////////////////////////////////////////////////////////////

// console.log(23 === 23.0);

// // Base 10 -   0  to 9
// // Binary base 2  - 0 1
// console.log(0.1 + 0.2);

// // Conversion
// console.log(Number('23'));
// console.log(+'23');

// // Parsing
// console.log(Number.parseInt('30px', 10));

// console.log(Number.parseFloat('2.5rem'));

// console.log(Number.isNaN(20));
// console.log(Number.isNaN('20'));

// // Checking if value is number
// console.log(Number.isFinite(20));
// console.log(Number.isFinite('20'));
// console.log(Number.isFinite('20X'));

//////////////////////////////////////////////////////////////////////

// console.log(Math.sqrt(25));
// console.log(25 ** (1 / 2));

// console.log(Math.max(5, 18, 25, 11, 2));

// console.log(Math.PI * Number.parseFloat('10px') ** 2);

// console.log(Math.trunc(Math.random() * 6 + 1));

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min) + 1) + min;
// console.log(randomInt(2, 10));

// // Rounding integers
// console.log(Math.trunc(23, 3));

// console.log(Math.round(23.9));

// console.log(Math.ceil(23.9));

// console.log(Math.trunc(-23.3));
// console.log(Math.floor(-23.3));

// // Rounding decimals

// console.log((2.7).toFixed(0));

//////////////////////////////////////////////////////////////////////

// Create a date
// const now = new Date();
// console.log(now);

// console.log(new Date('"Mon Jan 31 2022 05:49:18 GMT-0800"'));
// console.log(new Date(account1.movementsDates[0]));

// console.log(new Date(2037, 10, 19, 15, 23, 5));

// console.log(new Date(0));
// console.log(new Date(3 * 24 * 60 * 60 * 1000));

// Working with dates

// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.getSeconds());
// console.log(future.toISOString());
// console.log(future.getTime());

// console.log(new Date(2142285780000));

// console.log(Date.now());

// future.setFullYear(2040);
// console.log(future);

//////////////////////////////////////////////////////////////////////

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML =
//   'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// // header.prepend(message);
// header.append(message);
// // header.append(message.cloneNode(true));
// header.before(message);
// // header.after(message);

// // Delete elements

// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });

//////////////////////////////////////////////////////////////////////

// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// btnScrollTo.addEventListener('click', function (e) {
//   const s1coords = section1.getBoundingClientRect();
//   console.log(s1coords);

//   console.log(e.target.getBoundingClientRect());
//   console.log('Current scroll (X/Y)', window.pageXOffset, pageYOffset);

//   console.log(
//     'height/width viewport',
//     document.documentElement.clientHeight,
//     document.documentElement.clientWidth
//   );

//   // Scrolling
//   // window.scrollTo(
//   //   s1coords.left + window.pageXOfset,
//   //   s1coords.top + window.pageYOffset
//   // );
//   window.scrollTo({
//     left: s1coords.left + window.pageXOfset,
//     top: s1coords.top + window.pageYOffset,
//     behavior: 'smooth',
//   });
// });

// const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//   alert('addEventListener: Great! You are reading the heading :D');

//   h1.removeEventListener('mouseenter', alertH1);
// };

// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
// // h1.onmouseenter = function (e) {
// //   alert('addEventListener: Great! You are reading the heading :D');
// // };

//////////////////////////////////////////////////////////////////////
