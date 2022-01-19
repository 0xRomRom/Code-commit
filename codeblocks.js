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
