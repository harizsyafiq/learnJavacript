/*
// Question 1
let country = "Malaysia";
let continent = "Asia";
let population = 3000000;

console.log(country);
console.log(continent);
console.log(population);

// // Question 2
let isIsland = true;
let language;

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// // Question 3
// language = "Malay"

// const country = "Malaysia";
// const continent = "Asia"
// const isIsland = false;
// isIsland = true; // (Assignment to constant variable) Error because Const variable cannot be mutated


// Question 4
let averageMyPopulation = population / 2;
console.log(averageMyPopulation);

population++;
console.log(population);

const finlandPopulation = 6000000;
console.log(population > finlandPopulation);
console.log(averageMyPopulation < 33000000);

const description = country + ' is in ' + continent + ' and its ' + population + ' people speak ' + language;
console.log(description);


// Question 5
language = "malay"; 
const newDescription = (`${country} is in ${continent} and its ${population} people speak ${language}`);
console.log(newDescription);

// Question 6

if (population > 33000000){
    console.log(`${country} population is above average`);
} else {
    console.log(`${country} population is ${33000000 - population} below average`);
}

// Question 7 
// = 4
// = 617 
// = 23
// = false
// = 114

console.log(5 + 6 + '4' + 9 - 4 - 2); 

// Question 8

const numNeighbours = Number(prompt("How many neightbour countries does your country have ?"));
// im using strict equality to prevent bug because data is in string when prompt , so i use Number to manipulate the data type
if (numNeighbours === 1) {
    console.log("Only 1 border!");
} else if (numNeighbours > 1) {
    console.log("More than 1 border");
} else {
    console.log("No borders");
}

// Question 9

if (language === 'english' && country < 50000000 && !isIsland){
    console.log(`You should live in ${country}`);
} else {
    console.log(`${country} does not meet your criteria :(`)
}

console.log(language);
switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log("MOST number of native speakers!");
        break;
    case 'spanish':
        console.log("2nd place in number of native speakers");
        break;
    case 'english':
        console.log("3rd place");
        break;
    case 'hindi':
        console.log("number 4");
        break;
    case 'arabic':
        console.log("5th most spoken language");
        break;
    default :
        console.log("Great language too :D")

}

console.log(`${population > 33000000 ? 'Malaysia population is above average' : 'malaysian population is below average' }`); // my answer 

console.log (`${country}'s population is ${population > 33000000 ? 'above' : 'below'} average`); // more clean code
*/


console.log(150 + 150 + 70 + 20 + 500 + 50 + 70 + 50 + 100)