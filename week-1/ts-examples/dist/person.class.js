"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
let myName = new Person("Laurel", "Condon");
console.log(`My name is ${myName.firstName} ${myName.lastName}`);
