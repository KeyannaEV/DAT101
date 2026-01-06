"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 1, 2 and 3");

let wakeUpTime = Math.random() < 0.5 ? 7 : 8; // Random number between 7 and 8
printOut("Wake up time = " + wakeUpTime);

if (wakeUpTime === 7) {
  printOut("I can catch the bus to school.");
} else if (wakeUpTime === 8) {
  printOut("I can take the train to school.");
} else {
  printOut("I have to take the car to school.");
}

printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let Values = Math.floor(Math.random() * 21) - 10;
printOut("Oppgave 4 value = " + Values);

if (Values > 0) {
  printOut("Value is positive");
} else if (Values < 0) {
  printOut("Value is negative");
} else {
  printOut("Value is zero");
}

printOut(newLine);

printOut("--- Part 6, 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const min = 4;
const max = 6;

let photosize = Math.floor(Math.random() * 8) + 1;
printOut("Oppgave 6 photo size = " + photosize);

if (photosize < min) {
  printOut("The image is too small");
} else if (photosize >= max) {
  printOut("Image is too large");
} else {
  printOut("Thank you");
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const monthList =["January", "February", "Mars", "April", "Mai",
"Jun", "Juli", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
printOut("Month is = " + monthName);

if (monthName.toLowerCase().includes("r")) {
  printOut("You must take vitamin D");
} else {
  printOut("You do not need to take vitamin D");
}

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let days;
if (monthName === "February") {
  days = 28;
} else if (["April", "June", "September", "November"].includes(monthName)) {
  days = 30;
} else {
  days = 31;
}

printOut("It is " + days + " days in " + monthName);
printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

//skrev ikke inn måned koden her, fordi jeg bruker samme måned kode fra oppgave 8

if (monthName === "Mars" || monthName === "Mai") {
  printOut("The Art gallery is closed for refurbishment in " + monthName + ".");
} else if (monthName === "April") {
  printOut("The Art gallery is open in " + monthName + " at the temporary premises next door.");
} else {
  printOut("The Art gallery is open in " + monthName + ", Welcome!");
}

printOut(newLine);
