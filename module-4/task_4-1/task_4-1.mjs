"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

const AccountType = {
    Normal: "Brukskonto",
    Saving: "Sparekonto",
    Credit: "Kreditkonto",
    Pension: "Pensjonskonto"
}

const CurrencyTypes = {
  NOK: { value: 1.0000, name: "Norske kroner", denomination: "kr" },
  EUR: { value: 0.0985, name: "Europeiske euro", denomination: "€" },
  USD: { value: 0.1091, name: "United States dollar", denomination: "$" },
  GBP: { value: 0.0847, name: "Pound sterling", denomination: "£" },
  INR: { value: 7.8309, name: "Indiske rupee", denomination: "₹" },
  AUD: { value: 0.1581, name: "Australske dollar", denomination: "A$" },
  PHP: { value: 6.5189, name: "Filippinske peso", denomination: "₱" },
  SEK: { value: 1.0580, name: "Svenske kroner", denomination: "kr" },
  CAD: { value: 0.1435, name: "Canadiske dollar", denomination: "C$" },
  THB: { value: 3.3289, name: "Thai baht", denomination: "฿" }
};

class TAccount {
    #type = 0;
    #balance = 0;
    #withdrawCount = 0;
    #currency = null;

    constructor(aType) {
        this.#type = aType;
        this.#currency = CurrencyTypes.NOK;
    }

    #currencyConverter(aType){
        return aType.value / this.#currency.value;
    }

    toString() {
        return this.#type;
    }

    setType(aType) {
        this.#withdrawCount = 0;
        let oldType = `Account type changed from ${this.toString()}`;
        this.#type = aType;
        oldType = `${oldType} to ${this.toString()}`;
        printOut(oldType);
    }

    getBalance() {
        return this.#balance.toFixed(2);
    }

    deposit(aAmount, aCurrencyType = CurrencyTypes.NOK){
        this.#withdrawCount = 0;
        const exchange = this.#currencyConverter(aCurrencyType);
        const newAmount = aAmount / exchange;
        this.#balance += newAmount;
        const den = this.#currency.denomination;
        printOut(`Deposit of ${aAmount} ${aCurrencyType.name}, new balance is ${this.#balance.toFixed(2)} ${den}.`);
    }

    withdraw(aAmount, aCurrencyType = CurrencyTypes.NOK){
        switch (this.#type){
            case AccountType.Pension:
                printOut(`You can´t withdraw from ${this.#type}`);
                return;
            case AccountType.Saving:
                this.#withdrawCount++;
                if(this.#withdrawCount > 3){
                    printOut(`You can´t withdraw from ${this.#type} more than three times!`);
                    return;
                }
                break;
        }
        const exchange = this.#currencyConverter(aCurrencyType);
        const newAmount = aAmount / exchange;
        this.#balance -= newAmount;
        const den = this.#currency.denomination;
        printOut(`Withdraw of ${aAmount} ${aCurrencyType.name}, new balance is ${this.#balance.toFixed(2)} ${den}.`);
    }

    setCurrencyType(aType) {
        if (this.#currency === aType){
            return;
        }
        printOut(`The currency has changed from ${this.#currency.name} to ${aType.name}.`);
        const exchange = this.#currencyConverter(aType);
        this.#currency = aType;
        this.#balance *= exchange;
        printOut(`New balance is ${this.#balance.toFixed(2)} ${this.#currency.denomination}.`);
    }
}
printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(Object.values(AccountType).join(", "));
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const myAccount = new TAccount(AccountType.Normal);
printOut(`myAccount = ${myAccount.toString()}`);
myAccount.setType(AccountType.Saving);
printOut(`myAccount = ${myAccount.toString()}`);


printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

myAccount.deposit(100);
myAccount.withdraw(25);
printOut(`My account balance is ${myAccount.getBalance()}`);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

myAccount.deposit(25);
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.setType(AccountType.Pension);
myAccount.withdraw(30);
myAccount.setType(AccountType.Saving);
myAccount.withdraw(10);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

myAccount.deposit(150);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

myAccount.setCurrencyType(CurrencyTypes.SEK);
myAccount.setCurrencyType(CurrencyTypes.USD);
myAccount.setCurrencyType(CurrencyTypes.NOK);
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

myAccount.deposit(12, CurrencyTypes.USD);
myAccount.withdraw(10, CurrencyTypes.GBP);
myAccount.setCurrencyType(CurrencyTypes.CAD);
myAccount.setCurrencyType(CurrencyTypes.INR);
myAccount.withdraw(150.1585, CurrencyTypes.SEK);

printOut(newLine);
