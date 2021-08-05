'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('i can drive');

// const interface = 'Audio'; // strict mode reserve word cannot use for variable
// const private = 254646; 
*/

/*
function logger() {
    console.log('My name is Hariz');
}

// calling / running / invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, grapes) {
    const juice = `Juice with ${apples} apples and ${grapes} grapes`;
    return juice;
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);

const appleGrapeJuice = fruitProcessor(6,4);
console.log(appleGrapeJuice);
*/

/*
// Funtion Declaration // can call them in a code before they are defined 
function calcAge1(birthYear){
    return 2040 - birthYear;
}
const age1 = calcAge1(1996);
console.log(age1);

// Function Expression // can only call them after they are defined
const calcAge2 = function(birthYear){
    return 2039 - birthYear; 
}
const age2 = calcAge2(1996);

console.log(age2);
*/

/*
// Arrow function // simplest form of function which is when we only have exactly one parameter , one line of code in which we want to return something
const calcAge3 = birthYear => 2039 - birthYear;
const age3 = calcAge3(1996);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const currentAge = 2039 - birthYear;
    const retirement = 60 - currentAge;
    // return retirement;
    return `${firstName} has ${retirement} years until retirement`;
}

console.log(yearsUntilRetirement(1996 , 'Hariz'));
console.log(yearsUntilRetirement(1991 , 'Wani'));
*/

/*
// Functions Calling Other Functions 
function cutFruitPieces(fruit){
    return fruit *3;
}

function fruitProcessor(apples, orange) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(orange);
    const juice = `Juice with ${applePieces} pieces of apples and ${orange} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(2,3));
*/

/*
// Function Calling other Functions

const calAge = function(birthYear){
    return 2039 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const currentAge = calAge(birthYear);
    const retirement = 60 - currentAge;
    
    if(retirement > 0){
        console.log(`${firstName} has ${retirement} years until retirement`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired :D `);
        return -1;
    }
    
    
    // return 
}

console.log(yearsUntilRetirement(1996, 'Hariz'));
console.log(yearsUntilRetirement(1960, 'Mike'));
console.log(yearsUntilRetirement(1955, 'Sarah'));
*/

/*
// Coding Challenge 1 part 2 jonas solution 

const calcAverage = (a,b,c) =>
(a+b+c)/3; 

// test data 1
const scoreDolphins = calcAverage(44,23,71);
const scoreKoalas = calcAverage (65,54,49);

const checkWinner = function(avgDolphins,avgKoalas){
    if(avgDolphins >= 2 * avgKoalas){
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins){
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team win... :(');
    }
}

checkWinner(scoreDolphins,scoreKoalas);

// test data 2

scoreDolphins = calcAverage(85,54,41);
scoreKoalas = calcAverage(23,34,27);

checkWinner(scoreDolphins, scoreKoalas);
*/

/*
// Array

const friend1 = 'Hirwan';
const friend2 = 'Israfil';
const friend3 = 'Ben';

const friends = ['Hirwan', 'Israfil', 'Ben']; // we should do this way and it is call literal syntax
console.log(friends);

const y = new Array(1991, 1987, 2008, 2020); // this is how we create array

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length-1]);

friends[2] = 'Ryan'; // im replacing data in the array 
console.log(friends[2]); // see if it works

const firstName = 'Hariz';
const hariz = [firstName, 'Syafiq', 2020 - 1996, 'student', friends];
console.log(hariz);


// Exercise
const calAge = function(birthYear){
    return 2020 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calAge(years[0]);
const age2 = calAge(years[1]);
const age3 = calAge(years[years.length - 1]); // use things length to determine last array index

console.log(age1, age2, age3);

const ages = [calAge(years[0]),calAge(years[1]),calAge(years[years.length - 1])]; // this line show i create new array using data we log above from last array

console.log(ages);
*/

/*
// Basic Array Operations (Methods)

// method to add elements
const friends = ['Hirwan', 'Israfil', 'Ben'];
const newLength = friends.push('Ryan'); // using push to add element to the last array 
console.log(friends);
console.log(newLength);

friends.unshift('Mat'); // using unshift to add element to the beginning of array
console.log(friends);

// method to remove element
friends.pop(); // using pop for the last element in array
const popped = friends.pop(); // to see whether friends.pop(); got value 
console.log(popped);
console.log(friends);

const shifted = friends.shift(); // remove first element in the array
console.log((friends));

console.log(friends.indexOf('Israfil'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Israfil')); // includes is modern/ES6 method which is similar to indexOf but instead of returning the index of the element it returns true if the element is in the array and false it it's not 
console.log(friends.includes('Bob'));
console.log(friends.includes('23')); // this will return false . It will compare strict equalities(===) cause it does not do type of coercion

if(friends.includes('Hirwan')) {
    console.log('You have a friend called Hirwan');
}
*/

/*
// Coding Challenge 2 part 2 jonas solution 

const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// Top is using function expression and below is arrow function can choose which one you think easier

// const calcTIp = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];

console.log(bills,tips);
*/

/*
// Introduction to Objects

const jonasArray = [  // Use array for more order data 
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Micheal','Peter','Steven']
];

const hariz = {  // Use object for more unstructure data
    firstName: 'Hariz', // property: value 
    lastName: 'Syafiq',
    age: 2021 - 1996,
    job: 'Student',
    friend: ['Ryan', 'Wan', 'Israfil']
};
*/

/*
// Dot vs. Bracket Notation

const hariz = {  
    firstName: 'Hariz',
    lastName: 'Syafiq',
    age: 2021 - 1996,
    job: 'Student',
    friends: ['Ryan', 'Wan', 'Israfil']
};

console.log(hariz);

console.log(hariz.lastName); // eg. Dot notation (Cleaner and easier to use)
console.log(hariz['lastName']); // eg.  Bracket Notation

const nameKey = 'Name';
console.log(hariz['first' + nameKey]);
console.log(hariz['last' + nameKey]);


const interestedIn = prompt('What do you want to know about Hariz ? Choose between firstName ,  lastName , age , job and friends');

console.log(hariz[interestedIn]); // another example using bracket notation

if(hariz[interestedIn]) {
    console.log(hariz[interestedIn]);
} else {
    console.log('Wrong request!! Choose between firstName ,  lastName , age , job and friends');
}

hariz.location = 'Ipoh';
hariz['twitter'] = '@Harlzsyaflq';

console.log(hariz);

// Challenge
// write "Hariz has 3 friends, and his best friend is called Ryan"

console.log(`${hariz.firstName} has ${hariz.friends.length} friends, and his best friend is called ${hariz.friends[0]}`);
*/

/*
// Object Methods 

const hariz = {  
    firstName: 'Hariz',
    lastName: 'Syafiq',
    birthYear: 1996,
    job: 'Student',
    friends: ['Ryan', 'Wan', 'Israfil'],
    hasDriversLicense: true,

    // // calAge is a property of Hariz 
    // calAge: function(birthYear){
    //     return 2021 - birthYear;
    // }
    
    // 'this' will refer to the whole hariz object
    //  calAge: function() {
    //     // console.log(this);
    //     return 2021 - this.birthYear;
    // }

    calAge: function() {
        this.age = 2021 - this.birthYear; // creating a new property for hariz 
        return this.age;
    },

// Challenge
// Write a method called getSummary and return string "Hariz is a 25-year old Student, and he has a/no driver's license"

    // NEED (,) in between property 
    // My solution (still true but refer to jonas's for more cleanCode)
    
    // getSummary: function(hasDriversLicense) {
    //     if(hasDriversLicense = true) {
    //         return `${this.firstName} is a ${this.calAge()}-year old ${this.job}, and he has a driver's license`;
    //     } else {
    //         return `${this.firstName} is a ${this.calAge()}-year old ${this.job}, and he has no driver's license`;
    //     }

    // }
    

    // Jonas Solution
    getSummary: function(){     
        return `${this.firstName} is a ${this.calAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }

};

console.log(hariz.calAge()); // Dot notation
console.log(hariz.age);
console.log(hariz.age);


console.log(hariz.getSummary());
*/

/*
// Iteration : The for Loop

// console.log('Lifting weight repetition 1 🏋️');
// console.log('Lifting weight repetition 2 🏋️');
// console.log('Lifting weight repetition 3 🏋️');
// console.log('Lifting weight repetition 4 🏋️');
// console.log('Lifting weight repetition 5 🏋️');
// console.log('Lifting weight repetition 6 🏋️');
// console.log('Lifting weight repetition 7 🏋️');
// console.log('Lifting weight repetition 8 🏋️');
// console.log('Lifting weight repetition 9 🏋️');
// console.log('Lifting weight repetition 10 🏋️');

// for loop keeps running while condition it TRUE

for(let rep = 1; rep >= 30 ; rep ++) {
    console.log(`Lifting weight repetition ${rep} 🏋️`);
}*/


// looping Array , Breaking and Continuing

const jonas = [ 
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Micheal','Peter','Steven'],
    true
];

// console.log(jonas[0]);
// console.log(jonas[1]);
// ... 
// console.log(jonas[4]);
// jonas[5] does NOT exist



for(let i=0; i < jonas.length;  i++){
    console.log(jonas[i], typeof jonas[i]);
}