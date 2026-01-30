"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function todaysDate() {
  const today = new Date();

  const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
  return today.toLocaleDateString("no-NB", options);
}

printOut(todaysDate());
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function daysUntilEvent(){
    const releaseDate = new Date("2025-05-14");
    const today = new Date();

    const msPerDay = 1000 * 60 * 60 * 24;
    const timeDiff = releaseDate - today;

    return Math.ceil(timeDiff / msPerDay);
}

function daysLeftEvent() {
    const today = todaysDate();
    const daysLeft = daysUntilEvent();

    return `Det var ${daysLeft} dager siden av den episke lanseringen av 2XKO! `;
}

printOut("Dagens dato: " + todaysDate());
printOut(daysLeftEvent());

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function radiusCircle(radius) {
    const diameter = radius * 2;
    const circumference = Math.PI * diameter;
    const area = Math.PI * radius * radius;

    return { diameter, area, circumference };
}

printOut("Diameter: " + radiusCircle(5).diameter.toFixed(0));
printOut("Circumference: " + radiusCircle(5).circumference.toFixed(2));
printOut("Areal: " + radiusCircle(5).area.toFixed(2));
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function rectangle(rect){
    const width = rect.width;
    const height = rect.height;

    const circumference = 2 * (height + width);
    const area = height * width;

    return { width, height: height.toFixed(2), circumference: circumference.toFixed(2), area: area.toFixed(2) };

}
const rectInfo = rectangle({ height: 3, width: 4 });

printOut("Width: " + rectInfo.width + ", Height: " + rectInfo.height);
printOut("Circumference: " + rectInfo.circumference);
printOut("Area: " + rectInfo.area);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function convertTemp(temp, type){
    let celsius, fahrenheit, kelvin;

    if(type === "C"){
        celsius = temp;
        fahrenheit = (temp * 9/5) + 32;
        kelvin = temp + 273.15;

    } else if(type === "F"){
        celsius = (temp - 32) * 5/9;
        fahrenheit = temp;
        kelvin = celsius + 273.15;
    } else if(type === "K"){
        celsius = temp - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = temp;
    } else {
        throw new Error("Invalid temperature type");
    }

    return {celsius: celsius.toFixed(0), fahrenheit: fahrenheit.toFixed(0), kelvin: kelvin.toFixed(0)};
}

const convCelsius = convertTemp(47, "C");
printOut(
    `Convert ${convCelsius.celsius} Celsius${newLine}` +
    `Celsius: ${convCelsius.celsius}${newLine}` +
    `Fahrenheit: ${convCelsius.fahrenheit}${newLine}` +
    `Kelvin: ${convCelsius.kelvin}${newLine}`
);

const convFahrenheit = convertTemp(100, "F");
printOut(
    `Convert ${convFahrenheit.fahrenheit} Fahrenheit${newLine}` +
    `Celsius: ${convFahrenheit.celsius}${newLine}` +
    `Fahrenheit: ${convFahrenheit.fahrenheit}${newLine}` +
    `Kelvin: ${convFahrenheit.kelvin}${newLine}`
);
const convKelvin = convertTemp(300, "K");
printOut(
    `Convert ${convKelvin.kelvin} Kelvin${newLine}` +
    `Celsius: ${convKelvin.celsius}${newLine}` +
    `Fahrenheit: ${convKelvin.fahrenheit}${newLine}` +
    `Kelvin: ${convKelvin.kelvin}${newLine}`
);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function calculatePrice(gross, taxGroup){
    let vat;
    let group = String(taxGroup).toLowerCase();

    if (group === "normal")
        vat = 25;
    else if (group === "food")
        vat = 15;
    else if (group === "hotel" || group === "transport" || group === "cinema")
        vat = 10;
    else {
        printOut(group + " is Unknown VAT group!");
        return NaN;
    }

    let net = (100 * gross) / (vat + 100);

    printOut(
        `${gross} is ${net.toFixed(2)} without TAX`)
}

calculatePrice(100, "normal");
calculatePrice(150, "food");
calculatePrice(50, "hotel");
calculatePrice(100, "goblins");

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function calculateSDT(speed, distance, time) {
    const missing = [speed, distance, time].filter(value => value === undefined || value === null).length;

    if (missing > 1) {
        if (speed == null) speed = NaN;
        if (distance == null) distance = NaN;
        if (time == null) time = NaN;
    } else {
        if (speed == null) {speed = distance / time;}
        else if (distance == null) {distance = speed * time;}
        else if (time == null) {time = distance / speed;}
    }

    printOut(
        `Speed = ${speed.toFixed(2)} km/h ${newLine}
        Distance: ${distance.toFixed(2)} km ${newLine}
        Time: ${time.toFixed(2)} h ${newLine}`);

    return {speed, distance, time};
}

calculateSDT(75,50,null);
calculateSDT(null,120,2);
calculateSDT(70,null,1.50);
calculateSDT(null,50,null);

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function newString(text, maxLength, char, booleanValue){
    if (text.length < maxLength){
        const padLength = maxLength - text.length;
        const fillString = char.repeat(padLength);

        text = booleanValue ? fillString + text : text + fillString;
    }

    printOut(` ${text} `);
    return text;
}
newString("This is a text", 15, " aaaaa", true);
newString("This is a text", 15, "", false);

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function sumRange(start, count){
    let sum = 0;
    for (let i = start; i < start + count; i++) {
        sum += i;
    }
    return sum;
}

function testMathExpression(lines){
    let current = 1;

    for (let line = 1; line <= lines; line++) {
        const left = [];
        const right = [];

        // FILL LEFT AND RIGHT ARRAY
        for (let i = 0; i < line + 1; i++) {
            left.push(current++);
        }

        for (let i = 0; i < line; i++) {
            right.push(current++);
        }

        //CALCULATE SUM
        let leftSum = 0;
        for (let num of left) {
            leftSum += num;
        }
        let rightSum = 0;
        for (let num of right) {
            rightSum += num;
        }

        printOut(left.join(" ") + " = " + right.join(" ")); // print left and right side

        if (leftSum !== rightSum) {
            printOut(`Mismatch at line ${line}: Left = ${leftSum}, Right = ${rightSum}`);
            return;
        }
    }
    printOut("Maths fun!");
}

testMathExpression(10);

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function recursiveSum(n) {
    if (n === 0 || n === 1) {
        return 1;
    }

    return n * recursiveSum(n - 1);
}

let number = 9;
let result = recursiveSum(number);
printOut(`factorial(${number}) is ${result}`);
