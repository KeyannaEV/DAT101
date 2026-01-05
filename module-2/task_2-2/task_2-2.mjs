"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const Modified = 2 + 3 * (2 - 4) * 6;

printOut("2 + (3 * (2 - 4)) * 6 = " + Modified);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const Metres = 25;
const Centimetres = 34;
const TotalCentimetres = (Metres * 100) + Centimetres;

const Inches = TotalCentimetres / 25.4;
const RoundedInches = Math.round(Inches * 1000) / 100;

printOut(Metres + " metres and " + Centimetres + " centimetres = " + RoundedInches);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const day = 3;
const hours = 12;
const minutes = 14;
const seconds = 45;

const totalMinutes = (day * 24 * 60) + (hours * 60) + minutes + (seconds / 60);
const roundedTotalMinutes = Math.round(totalMinutes * 100) / 100;

printOut(day + " days, " + hours + " hours, " + minutes + " minutes and " + seconds + " seconds = " + roundedTotalMinutes);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const min = 6322.52;
const totalDays = Math.floor(min / (24 * 60));
const totalHours = Math.floor(min / 60);
const remainingMinutes = Math.floor(min % 60);
const totalSeconds = Math.round((min - Math.floor(min)) * 60);


printOut(min + " minutes is: " + totalDays + " days, " + (totalHours % 24) + " hours, " + remainingMinutes + " minutes and " + totalSeconds + " seconds,");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const USD = 54;
const exchangeRateNOK = 76 / 8.6;
const exchangeRateUSB = 8.6 / 76;

const NOK = Math.round(USD * exchangeRateNOK);
const backToUSD = Math.round(NOK * exchangeRateUSB);

printOut(USD + " USD = " + NOK + " NOK");
printOut(NOK + " NOK = " + backToUSD + " USD");

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const text = "There is much between heaven and earth that we do not understand.";
const characterCount = text.length;
const p19 = text.charAt(19);
const p35 = text.substr(35, 8);
const index = text.indexOf("earth");

printOut("There is much between heaven and earth that we do not understand.");
printOut("The text has " + characterCount + " characters");
printOut("The character at position 19 is: " + p19);
printOut("The substring from position 35 and 8 places is: " + p35);
printOut("The index of the word 'earth' starts at pos " + index);


printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const exp1 = 5 > 3;
const exp2 = 7 >= 7;
const exp3 = "a" > "b";
const exp4 = 1 < "a";
const exp5 = "2500" < "abcd";
const exp6 = "arne" !== "thomas";
const exp7 = 2 == 5;
const exp8 = !("abcd" > "bcd");

printOut("5 > 3 is " + exp1);
printOut("7 >= 7 is " + exp2);
printOut('"a" > "b" is ' + exp3);
printOut('"1" < "a" is ' + exp4);
printOut('"2500" < "abcd" is ' + exp5);
printOut('"arne" !== "thomas" is ' + exp6);
printOut("(2 === 5) === true is " + exp7);
printOut('("abcd" > "bcd") === false ' + exp8);

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const text1 = "254";
const text2 = "57.23";
const text3 = "25 kroner";

const num1 = Number(text1);
const num2 = Number(text2);
const num3 = parseInt(text3, 10);

printOut(`"${text1}" = ` + num1);
printOut(`"${text2}" = ` + num2);
printOut(`"${text3}" = ` + num3);

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const r = Math.ceil(Math.random() * 360);

printOut("Math.ceil(Math.random() * 360) = " + r);

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const TotalDays = 131;
const weeks = Math.floor(TotalDays / 7);
const days = TotalDays % 7;

printOut(TotalDays + " days is " + weeks + " weeks and " + days + " days.");


printOut(newLine);