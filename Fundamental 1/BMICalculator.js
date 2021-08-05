/* const markMassA = 78;
const markHeightA = 1.69;
const johnMassA = 92;
const johnHeightA = 1.95;  

const markABMI = markMassA / (markHeightA ** 2); // markheight ** 2 same meaning with markheight * markheight
const johnABMI = johnMassA / (johnHeightA ** 2); // johnheight ** 2 same meaning with markheight * markheight
console.log(markABMI);
console.log(johnABMI);

const markAHigherBMI = markABMI > johnABMI;
console.log(markAHigherBMI); // i can also console.log(markBMI , johnBMI , markHigherBMI);

const markMassB = 95;
const markHeightB = 1.88;
const johnMassB = 85;
const johnHeightB = 1.76;  

const markBBMI = markMassB / (markHeightB ** 2); // markheight ** 2 same meaning with markHeightBght * markheight
const johnBBMI = johnMassB / (johnHeightB ** 2); // johnheight ** 2 same meaning with markheight * markheight
console.log(markBBMI);
console.log(johnBBMI);

const markBHigherBMI = markBBMI > johnBBMI;
console.log(markBHigherBMI); // i can also console.log(markBMI , johnBMI , markHigherBMI);


const haziqMass = 22.05;
const haziqHeight = 1.10;
const harizMass = 54.95;
const harizHeight = 1.75;

const haziqBMI = haziqMass / (haziqHeight ** 2);
const harizBMI = harizMass / (harizHeight ** 2);
console.log(haziqBMI ,harizBMI);

if(haziqBMI > harizBMI){
    console.log("Haziq's BMI is higher than Hariz's")
} else {
    console.log("Hariz's BMI is higher than Haziq's")
}

if(haziqBMI > harizBMI){
    console.log(`Haziq's BMI(${haziqBMI}) is higher than Hariz's(${harizBMI})`)
} else {
    console.log(`Hariz's BMI(${harizBMI}) is higher than Haziq's(${haziqBMI})`)
}


// Challenge 3 no 1 and 2 
const dolphinAverageScore = (96 + 108 + 89) / 3;
const koalaAverageScore =  (88 + 91 + 110) / 3;
console.log(dolphinAverageScore,koalaAverageScore);

if (dolphinAverageScore > koalaAverageScore){
    console.log("Dolphin gymnastics team is the Winner Of the Competition!");
} else if (dolphinAverageScore === koalaAverageScore) {
    console.log("Both team are the Winner of the competition sharing the same score!!!")
} else {
    console.log("Koala gymnastics team is the Winner Of the Competition!");
}

// Bonus 1 and 2
const dolphinScore = (97 + 112 + 101) / 3;  
const koalaScore =   (109 + 95 + 106) / 3; // (109 + 95 + 123) / 3;
console.log(dolphinScore , koalaScore);

const dolphinScorePassMinimum = dolphinScore >= 100; // solution show easier way which is dont need to declare variable and straight put this in the logical operator (dolphinScore >= 100 && dolphinScore > koalaScore)
const koalaScorePassMinimum = koalaScore >= 100;
console.log(dolphinScorePassMinimum, koalaScorePassMinimum);

if (dolphinScorePassMinimum && (dolphinScore > koalaScore)) {
    console.log("Dolphin Teams win the Trophy!");
} else if (koalaScorePassMinimum && (koalaScore > dolphinScore)){
    console.log("Koala Team win the Trophy!");
} else if ( dolphinScorePassMinimum && koalaScorePassMinimum && (koalaScore === dolphinScore)){
    console.log("Both team win the Trophy! :)");
} else {
    console.log("Both team didn't pass the requirement minimum score to win the trophy :(");
}
*/

// Coding Challenge 4

// i do this first step
// const billValues = 275 + 40 + 430;
// let tip;
// if(billValues >= 50 && billValues <= 300) {
//     tip = billValues * 15 / 100;
//     console.log(`The bill was ${billValues}, the tip was ${tip}, and the total value ${tip + billValues}`);
// } else { 
//     tip = billValues * 20 / 100;
//     console.log(`The bill was ${billValues}, the tip was ${tip}, and the total value ${tip + billValues}`);
// }

// then i convert the if else code above to a ternary operator
const billValues = 275 + 40 + 430;
let tip;

    console.log(`The bill was ${billValues}, the tip was ${billValues >= 50 && billValues <= 300 ? tip = billValues* 15/ 100 : tip = billValues * 20 / 100}, and the total value ${tip + billValues}`);

// // Jonas code 
// // can straight away to this if u had a good understanding on this ternary operator using template literal , clean code
// const bill = 275 + 40 + 430;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was ${bill}, and the tip was ${tip}, and the total value ${bill + tip}`);