"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const nrArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (let i = 0; i < nrArray.length; i++) { // 
    printOut(nrArray[i]); // 
}

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(nrArray.join(", "));

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const greeting = "Hei på deg, hvordan har du det?";
let greetArray = greeting.split(" ");

for (let i = 0; i < greetArray.length; i++) { // 
    printOut(`Word number: ${i + 1}, Index: ${i}, Word: ${greetArray[i]}`);
}

//printOut(greetArray.join("\n"));

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const girlNames = [
    "Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid",
    "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"
];

function removeElement(array, text) {
    const element = array.indexOf(text); // Find the index of the element
    if (element > -1) { // If the element is found
        printOut(`The element "${text}" was found and deleted!`);
        array.splice(element, 1);

        const afterRemoval = array.join(", ");
        printOut(afterRemoval);
    } else {
        printOut(`The element "${text}" was not found.`);
    }
}

removeElement(girlNames, "Solveig");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const boyNames = [
    "Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah",
    "Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor",
    "Magnus"
];

const bothNames = girlNames.concat(boyNames);

printOut(bothNames.join(", "));
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

class TBook {
    #Title;
    #Author;
    #ISBN;

    constructor(aTitle, aAuthor, aISBN) {
        this.#Title = aTitle;
        this.#Author = aAuthor;
        this.#ISBN = aISBN;
    }

    toString() {
        return `Title: ${this.#Title}, Author: ${this.#Author}, ISBN: ${this.#ISBN}`;
    }
}

const book1 = new TBook("The Hobbit", "J.R.R. Tolkien", "978-3-16-148410-0");
const book2 = new TBook("1984", "George Orwell", "978-0-452-28423-4");
const bookArray = [book1, book2];

let bookText = "";
for (const book of bookArray) {
    bookText += book.toString() + newLine;
}

printOut(bookText);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const EWeekDays = {
    WeekDay1: { value: 0x01, name: "Mandag" },
    WeekDay2: { value: 0x02, name: "Tirsdag" },
    WeekDay3: { value: 0x04, name: "Onsdag" },
    WeekDay4: { value: 0x08, name: "Torsdag" },
    WeekDay5: { value: 0x10, name: "Fredag" },
    WeekDay6: { value: 0x20, name: "Lørdag" },
    WeekDay7: { value: 0x40, name: "Søndag" },
    Workdays: { value: 0x01 + 0x02 + 0x04 + 0x08 + 0x10, name: "Arbeidsdager" },
    Weekends: { value: 0x20 + 0x40, name: "Helg" },
};

const keys = Object.keys(EWeekDays);

for (const key of keys) {
    printOut(`Key: ${key}, Value: ${EWeekDays[key].value}, Name: ${EWeekDays[key].name}`);
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const randomNumArray = [];
for (let i = 0; i < 35; i++){
    const randomNum = Math.floor(Math.random() * 20) + 1;
    randomNumArray.push(randomNum);
}

function sortAsc(a, b) {
    return a - b;
}

function sortDesc(a, b) {
    return b - a;
}

printOut(`original: ${"<br>"}${randomNumArray.join(" ")}`);
printOut(`sorted descending order: ${"<br>"}${randomNumArray.sort(sortDesc).join(" ")}`);
printOut(`sorted ascending order: ${"<br>"}${randomNumArray.sort(sortAsc).join(" ")}`);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/


const frequency = {};
for (let i = 0; i < randomNumArray.length; i++) { // Loop through the array
    let value = randomNumArray[i];
    if (frequency[value]) { // If the number is already in the object
        frequency[value] += 1; // Increment the count
    } else {
        frequency[value] = 1; // Initialize the count
    }
}

// Printer ut number og frequency
let freqText = "Number frequencies:\n";
for (let key in frequency) {
    freqText += `nr${key} - ${frequency[key]} times | \n`;
}
printOut(`${freqText}<br>`);

// Lager en array av objekter for sortering
let freqArray = [];
for (let key in frequency) {
    freqArray.push({ number: key, count: frequency[key] });
}

freqArray.sort(function(a, b) {
    if (b.count === a.count) {
        return a.number - b.number;
    }
    return b.count - a.count;
});

// Printer ut number og frequency "frequent ones first"
printOut(`Number frequencies (most frequent first):`);

for (const item of freqArray) {
    printOut(`nr${item.number} - ${item.count} times<br>`);
}

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const structureArray = [];

for (let row = 0; row < 5; row++) {
    const rowArray = [];
    for (let col = 0; col < 9; col++) {
        rowArray.push(`Row ${row + 1} Column ${col + 1}`);
    }
    structureArray.push(rowArray);
}

for (let row = 0; row < structureArray.length; row++) {
    const colArray = structureArray[row];
    const rowText = `${colArray.join(" | ")}<br>`;
    printOut(rowText);
}

printOut(newLine);
