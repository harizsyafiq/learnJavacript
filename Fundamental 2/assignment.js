'use strict';

/*
//Function
function describeCountry(country, population, capitalCity){
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const describeMalaysia = describeCountry('Malaysia', 27, 'Kuala Lumpur');

const describeJapan = describeCountry('Japan', 43, 'Tokyo');

const describeAustralia = describeCountry('Australia', 12, 'Canberra');

console.log(describeMalaysia);
console.log(describeJapan);
console.log(describeAustralia);


function aboutYourself(name, age, borncity){
    return `Hello its me ${name} , i am ${age} years old and i was born in ${borncity}`;
}

const aboutHariz = aboutYourself('Hariz', 25, 'Melaka');
const aboutSallehuddin = aboutYourself('Sallehuddin', 57,'Johor');

console.log(aboutHariz);
console.log(aboutSallehuddin);
*/

/*
// Function Declaration VS. Expressions

function percentageOfWorld1(population){
    return (population / 7900) * 100;
}

const percentageOfWorld2 = function(population) {
    return (population / 7900) * 100;
}

const percentageOfMalaysia1 = percentageOfWorld1(27);

const percentageOfJapan1 = percentageOfWorld1(43);

const percentageOfUnitedStates1= percentageOfWorld1(4322);

console.log(percentageOfMalaysia1, percentageOfJapan1,percentageOfUnitedStates1);

const percentageOfMalaysia2 = percentageOfWorld2(72);


const percentageOfJapan2 = percentageOfWorld2(345);


const percentageOfUnitedStates2 = percentageOfWorld2(7000);

console.log(percentageOfMalaysia2);
console.log(percentageOfJapan2);
console.log(percentageOfUnitedStates2);
*/

/*
// Arrow Function

const percentageOfWorld3 = population =>(population /7900) * 100;

const percentageOfMalaysia = percentageOfWorld3(46);
const percentageOfChina = percentageOfWorld3(98);
const percentageOfFrance = percentageOfWorld3(962);

console.log(percentageOfMalaysia, percentageOfChina, percentageOfFrance);
*/

/*
// Function Calling Other Function

// function describePopulation(country, population){
//     const percentageOfWorld1 = (population / 7900) * 100;
//     return `${country} has ${population} million people, which is about ${percentageOfWorld1} % of the world.`;
// }

// const descMalaysia = describePopulation('Malaysia', 27);
// const descJapan = describePopulation('Japan', 999);
// const descGerman = describePopulation('German', 1500);

// console.log(descMalaysia);
// console.log(descJapan);
// console.log(descGerman);

// -------------- OR ---------------- JOnas Solution 

const describePopulation = function (country, population){
    const percentageOfWorld1 = (population / 7900) * 100;
    const description = `${country} has ${population} million people, which is about ${percentageOfWorld1} % of the world.`;
    console.log(description);
}

describePopulation('Malaysia', 27);
describePopulation('Japan', 999);
describePopulation('German', 1500);
*/

/*
// Introduction to Arrays

function percentageOfWorld1(population){
    return (population / 7900) * 100;
}

const populations = [10, 15, 790, 960]; // create array containin 4 population values

console.log(populations.length === 4); // im log in the console true or false that array has 4 element

const percentages = [percentageOfWorld1(populations[0]),percentageOfWorld1(populations[1]),percentageOfWorld1(populations[2]),percentageOfWorld1(populations[3])]; 

console.log(percentages);
*/

/*
// Basic Array Operation (Methods)

const neighbours = ['Malaysia', 'Indonesia', 'Thailand'];
neighbours.push('Utopia');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

if (neighbours.includes('Germany')) {
    console.log('Probably not a central european country :D');
}

neighbours[neighbours.indexOf('Indonesia')] = 'Republic of Indonesia';
console.log(neighbours);
*/

/*
// Introduction to Objects

const myCountry = {
    country: 'Malaysia',
    capital: 'Kuala Lumpur',
    language: 'Bahasa Melayu',
    population : 32.7,
    neighbours: ['Indonesia','Thailand','Singapura'],
};

console.log(myCountry);
*/

/*
// Dot vs. Bracket Notation

const myCountry = {
    country: 'Malaysia',
    capital: 'Kuala Lumpur',
    language: 'Bahasa Melayu',
    population : 32.7,
    neighbours: ['Indonesia','Thailand','Singapura'],
};

console.log(`${myCountry.country} has ${myCountry.population} million peoples speak ${myCountry.language}, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);
*/

/*
// Object Methods

const myCountry = {
    country: 'Malaysia',
    capital: 'Kuala Lumpur',
    language: 'Bahasa Melayu',
    population : 32.7,
    neighbours: ['Indonesia','Thailand','Singapura'],

    describe: function(){
        console.log(`${this.country} has a ${this.population} million peoples speak ${this.language}, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`)
    },

    checkIsland: function(){
        this.isIsland = this.neighbours.length === 0 ? true : false;
    }
};

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);
*/

/*
// Iteration: The for loop

for(let voter = 1; voter <= 50; voter++) {
    console.log(`Voter number ${voter} is currently voting`);
}

*/

/*
// Looping Arrays, Breaking and Continuing

const populations = [10, 15, 790, 960];

function percentageOfWorld1(population){
    return (population / 7900) * 100;
}

const percentages2 = [];

for(let i = 0; i < populations.length; i++) {
    const perc = percentageOfWorld1(populations[i]);
    percentages2.push(perc);
}

console.log(percentages2);
*/

/*
// Looping Backwards and Loops in Loops

const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
];


for(let i = 0; i < listOfNeighbours.length; i++)
for(let y = 0; y < listOfNeighbours[i].length; y++)
console.log(`Neighbour : ${listOfNeighbours[i][y]}`);
*/

// The While Loop

const populations = [10, 15, 790, 960];

function percentageOfWorld1(population){
    return (population / 7900) * 100;
}

const percentages3 = [];
let i = 0;
while (i < populations.length) {
    const perc = percentageOfWorld1(populations[i]);
    percentages3.push(perc);
    i++;
}

console.log(percentages3);
