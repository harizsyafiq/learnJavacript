/* let js = "amazing";
console.log(40+8+23-10);

console.log("Hariz");
console.log(23);

let firstName = "Hariz";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let hariz_syafiq = "HS";
let $function = 27;

let person = "Hariz";
let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Warehousing";

// Better to write variable like above as it more readable
let job1 = "programmer"; 
let job2 = "teacher";

console.log(myFirstJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);
// this typeof is used to determind the data type of the variable
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Hariz");
// dont need to use let when we change or reassign the data type or value of the existing variable
javascriptIsFun = "Yeah";
console.log(typeof javascriptIsFun); //this example i change from boolean type to string

let year;
console.log(year);
console.log(typeof year);

year = 1996;
console.log(year);
console.log(typeof year);
// above code is example i change from undefined data type to number

console.log(typeof null);

// we use let when we later need to mutate or reassign the variable later in the program
let age = 30;
age = 31; 
// we use const to declare the variable that not supposed to change at any point of the future. eg.
const birthYear = 1996;
// birthYear = 1990; // this example will show error

// Var can also mutate variable as let but later i'll learn the differences between var is a function-scoped and let is block scoped
var job = "Programmer";
job = "Warehousing";

// variable can also be declared not using let , const or var as below but dont do like this because this doesn't create a variable in the current so-called scope instead javascript create it in the global object
lastName = "syafiq";
console.log(lastName);


// Math operator
const now = 2037;
const ageHariz = now - 1996;
const ageSarah = now - 2018;
console.log(ageHariz, ageSarah);

console.log(ageHariz * 2 , ageHariz / 10 , 2**3); // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Hariz";
const lastName = "Syafiq";
console.log(firstName + ' ' + lastName);

// Assignment operator
let x = 10 + 5;
x += 10; // x = x + 10
x *= 4; // x = x * 4
x ++; // x = x + 1
x --; // x = x - 1
console.log(x);

// Comparison Operator
console.log(ageHariz > ageSarah); // > , < , >= , <=
console.log(ageSarah >= 19);

const isFullAge = ageSarah >= 19;

console.log(now - 1991 > now - 2018); // computer use operator precedence for which one count first 


const firstName = "Hariz";
const year = 2021;
const birthYear = 1996;
const futureCareer = "Javascript Developer";

const hariz = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + futureCareer + "!";
console.log(hariz); // old way to write , hard to differentiate single qoute and double quote

const harizNew = `I'm ${firstName}, a ${year - birthYear} years old ${futureCareer}!`;
console.log(harizNew); // Easier way to write using ES6 features 

console.log('String with \n\
multiple \n\
line');

console.log(`String
multiple
line`); // Use this template literals whenever i need multple line string , much easier and cleaner


const myAge = 25;
const isOldEnough = myAge >= 18;

if(isOldEnough){
    console.log("Hariz can start getting driving license 🚗"); // below is common way to write
}


const myAge = 15;

if(myAge >=18){
    console.log("Hariz can start getting driving license 🚗");
} else {
    const yearsLeft = 18 - myAge;
    console.log(`Hariz is too young , wait another ${yearsLeft} years 😊`)
}



// Type Conversion
const inputYear = '1996';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18 );

console.log(Number('Hariz'));
console.log(typeof NaN);

console.log(String(23), 23);

// Type Coercion
console.log('I am ' + 25 + ' years old');
console.log('23' - '10' - 3);
console.log('23'/'2');
console.log('23' > '15');

// Quick Quiz 

let n = '1' + 1; // become 11 
n = n - 1;  // 11 - 1
console.log(n);


// 5 falsy valueus: 0 , '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Hariz'));
console.log(Boolean({}));

const money = 0; 
if (money){
    console.log("Don't spend it all ");
} else {
    console.log("You should get a job!"); // falsy values
}

let height = 0; // A bug happen here , special case refer next note
if (height) {
    console.log("YAY! Height is defined");
} else {
    console.log("Height is UNDEFINED")
}


const age = '18';
if (age === 18) console.log("You just become an adult :D (strict)"); // '18' string will not be compared to a number

if (age == 18) console.log("You just become an adult :D (loose)");

const favourite = Number(prompt("What's your favourite number ?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 420) {
    console.log("Cool! 420 will be your lucky number :D ");
} else if (favourite === 7) {
    console.log("Nice , 7 is fantastic number!");
} else if (favourite === 15) {
    console.log("15 is not kind of a good number :p");
} 
else {
    console.log('Number is not 420 or 7 or 15');
}

if (favourite !== 420) console.log('Why not 420?');


const hasDriverLicence = true; // A
const hasGoodVision = true; // B

console.log(hasDriverLicence && hasGoodVision);
console.log(hasDriverLicence || hasGoodVision);
console.log(!hasDriverLicence);

// if(hasDriverLicence && hasGoodVision) {
//     console.log("Hariz is able to drive!");
// } else {
//     console.log("Someone else should drive");
// }

const isTired = false; // C
console.log(hasDriverLicence && hasGoodVision && isTired); // Guess true or false

if(hasDriverLicence && hasGoodVision && !isTired) {
    console.log("Hariz is able to drive!");
} else {
    console.log("Someone else should drive");
}
*/

// const day = 'monday';

// switch(day) {
//     case 'monday': // day === 'monday'
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break; // the program will continue to execute the next case if there's no break
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday': // this is the way to continue execute the case for thursday using wednesday
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('My offday , lets skate dude!');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend :D');
//         break;
//     default:
//         console.log('WOW thats a new day ? i thought we only got 7 days a week :3');
// }

// if (day === 'monday'){
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
// } else if (day === 'tuesday'){
//     console.log('Prepare theory videos');
// } else if (day === 'wednesday' || day === 'thursday'){
//     console.log('Write code examples');
// } else if (day ==='friday'){
//     console.log('My offday , lets skate dude!');
// } else if (day === 'saturday' || day === 'sunday'){
//     console.log('Enjoy the weekend :D');
// } else {
//     console.log('WOW thats a new day ? i thought we only got 7 days a week :3');
// }

/* // Ternary operator
const age = 23;
age >= 18 ? console.log('I like to drink wine..') : 
console.log('I like to drink water..')

const drink = age >= 18 ? 'drink wine' : 'drink water';
console.log(drink); // longest way

let drink2;
if (age >= 18) {
    drink2 = 'drink wine';
} else {
    drink2 = 'drink water'
}
console.log(drink2); // casual if else statement

console.log(`I like to ${age >=18 ? 'drink wine' : 'drink water'}`); // ternary operator using template literal for quick decision 
*/