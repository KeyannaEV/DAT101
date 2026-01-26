"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let line1 = "";
let line2 = "";

for (let i = 1; i <= 10; i++) {
  line1 += i + ",";
}

for (let i = 10; i >= 1; i--) {
  line2 += i + ",";
}

printOut(line1.slice(0, -1));
printOut(line2.slice(0, -1));

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const correctNum1 = 11;
let guess1 = 0;

while (guess1 !== correctNum1) {
    guess1 = Math.floor(Math.random() * 60) + 1;
}

printOut(`Tallet er ${guess1}`);

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const correctNum2 = 10;
let guess2 = 0;
let attempts = 0;

let startTime = Date.now();

while (guess2 !== correctNum2) {
    guess2 = Math.floor(Math.random() * 1000000) + 1;
    attempts++;
}
let endTime = Date.now();
let timeTaken = endTime - startTime;

printOut(`Tallet er ${guess2}`);
printOut(`Antall forsøk: ${attempts}`);
printOut(`Tid brukt: ${timeTaken} ms`);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let primeLine = " ";

for (let i = 2; i <= 200; i++) {
    let isPrime = true;
    let j = 2;
    const limit = Math.sqrt(i);

    while (j <= limit && isPrime){
      let rest = i % j;
      isPrime = rest != 0 && 1 && 2;
      j++;
    }

    if (isPrime) {
      primeLine += "," + i;
    }
}
    printOut(primeLine.slice(2, primeLine.length));
  
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let text = " ";

for (let row = 1; row <= 7; row++) {
    let line = " ";
    for (let col = 1; col <= 9; col++) {
        line += "K" + col + "R" + row + " ";
    }

    line += newLine;
    text += line;
}

printOut(text);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let textStudent = "";

for (let student = 1; student <= 5; student++) {
    let score = Math.floor(Math.random() * 236) + 1;
    let percent = (score / 236) * 100;
    let grade;

    if (percent >= 89) {
        grade = "A";
    } else if (percent >= 77) {
        grade = "B";
    } else if (percent >= 65) {
        grade = "C";
    } else if (percent >= 53) {
        grade = "D";
    } else if (percent >= 41) {
        grade = "E";
    } else {
        grade = "F";
    }

    textStudent += "Student " + student + ": " + score + " points. - " + percent.toFixed(2) + "% - Grade: " + grade;
    if (student < 5) {
        textStudent += newLine;
    }
}

printOut(textStudent);
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const solveWithNumbers = false;

let diceThrow = 0;
let fullStraight = false;
let pairs = false;
let tower = false;
let yahtzee = false;

function matchNumber(aN1, aN2, aN3, aN4, aN5, aN6, aNumber){
    let count = 0;
    if (aN1 === aNumber) count++;
    if (aN2 === aNumber) count++;
    if (aN3 === aNumber) count++;
    if (aN4 === aNumber) count++;
    if (aN5 === aNumber) count++;
    if (aN6 === aNumber) count++;
    return count;
}

do {
    diceThrow++;

    // dice values 1 to 6
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;
    let dice3 = Math.floor(Math.random() * 6) + 1;
    let dice4 = Math.floor(Math.random() * 6) + 1;
    let dice5 = Math.floor(Math.random() * 6) + 1;
    let dice6 = Math.floor(Math.random() * 6) + 1;

    // counts how many times each face 1 to 6 appears
    let combo1 = matchNumber(dice1, dice2, dice3, dice4, dice5, dice6, 1);
    let combo2 = matchNumber(dice1, dice2, dice3, dice4, dice5, dice6, 2);
    let combo3 = matchNumber(dice1, dice2, dice3, dice4, dice5, dice6, 3);
    let combo4 = matchNumber(dice1, dice2, dice3, dice4, dice5, dice6, 4);
    let combo5 = matchNumber(dice1, dice2, dice3, dice4, dice5, dice6, 5);
    let combo6 = matchNumber(dice1, dice2, dice3, dice4, dice5, dice6, 6);

    // how many faces appear exactly N times
    let mCombo1 = matchNumber(combo1, combo2, combo3, combo4, combo5, combo6, 1); // full straight: six faces each once -> mCombo1 === 6
    let mCombo2 = matchNumber(combo1, combo2, combo3, combo4, combo5, combo6, 2); // three pairs -> mCombo2 === 3
    let mCombo4 = matchNumber(combo1, combo2, combo3, combo4, combo5, combo6, 4); // four of a kind -> mCombo4 === 1
    let mCombo6 = matchNumber(combo1, combo2, combo3, combo4, combo5, combo6, 6); // yahtzee -> mCombo6 === 1

    if (mCombo1 === 6 && !fullStraight){
        fullStraight = true;
        printOut(`Full straight! ${newLine} ${dice1},${dice2},${dice3},${dice4},${dice5},${dice6} ${newLine} ${diceThrow} throws.${newLine}`);
    }
    if (mCombo2 === 3 && !pairs){
        pairs = true;
        printOut(`Three pairs! ${newLine} ${dice1},${dice2},${dice3},${dice4},${dice5},${dice6} ${newLine} ${diceThrow} throws.${newLine}`);
    }
    if (mCombo4 === 1 && !tower){
        tower = true;
        printOut(`Tower (4 of a kind)! ${newLine} ${dice1},${dice2},${dice3},${dice4},${dice5},${dice6} ${newLine} ${diceThrow} throws.${newLine}`);
    }
    if (mCombo6 === 1 && !yahtzee){
        yahtzee = true;
        printOut(`Yahtzee! ${newLine}${dice1},${dice2},${dice3},${dice4},${dice5},${dice6} ${newLine} ${diceThrow} throws.`);
    }
} while (!fullStraight || !pairs || !tower || !yahtzee);

printOut(newLine);
