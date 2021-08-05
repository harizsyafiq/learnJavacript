'use strict';
/*
// Coding Challenge 1

// Test data 1
const calcAverage =(scoreA, scoreB, scoreC) => (scoreA + scoreB + scoreC) / 3;

let averageDolphins = calcAverage(44,23,71); // I use let so that i can manipulate the data of the variable using test data 2
let averageKoalas = calcAverage(65,54,49);

const checkWinner = function(avgDolphins,avgKoalas){
    if(avgDolphins >= 2 * avgKoalas){
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
        return 0;
    } else if (avgKoalas >= 2 * avgDolphins){
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
        return 0;
    } else {
        console.log('No team win :(');
        return 0;
    }
}

checkWinner(averageKoalas,averageDolphins);

// Test data 2

averageDolphins = calcAverage(85,54,41); //
averageKoalas = calcAverage(23,34,27);

checkWinner(averageDolphins,averageKoalas);


// -------------- Check Jonas Solution in script.js ---------------
*/

/*
// Coding Challenge 2 

const calcTip = function(billValue){
    if (billValue >= 50 && billValue <= 300) {
        return billValue * 0.15;
    } else {
        return billValue * 0.20;
    }
}

console.log(calcTip(100));

const bills = [125 , 555 , 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]),calcTip(bills[2])];

console.log(tips);

const total = [(bills[0] + tips[0]),(bills[1] + tips[1]),(bills[2] + tips[2])];

console.log(total);

// ----------------- Check Jonas Solution in script.js ------------
*/

/*
// Coding challenge 3

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBmi: function() {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBmi: function() {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
}

mark.calcBmi();
john.calcBmi();


if (mark.BMI > john.BMI){
    console.log(`${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s(${john.BMI})!`);
} else {
    console.log(`${john.fullName}'s BMI ${john.BMI} is higher than ${mark.fullName}'s (${mark.BMI})!`);
}

// --------------------- Check Jonas Solution in script.js ------------ lol no need this time , im able to write clean as jonas this time just refer to above :)))))))))

*/