'use strict';

// Class
// - template
// - declare once
// - no data in

// Object
// - instance of a class
// - created many times
// - data in

// Object-oriendted programming
// class: template
// object: instance of a class

// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototyped-based inheritance 프로토타입을 기반으로 문법만 생긴거다

// Class declarations
class Person {
    //constructor 생성자
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    }
    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }

    const elina = new Person('elina', 30);
    console.log(elina.name);
    console.log(elina.age);
    elina.speak();

// Getter and setter
class User {
        constructor(firstName, lastname, age) {
            this.firstName = firstName;
            this.lastName = lastname;
            this.age = age;
        }
}
    get age() {
        return this._age
    }

    set age(value) {
        // if (value < 0) {
        //     throw Error('age cannot be negative!');
        // }
        this._age = value < 0 ? 0:value;
    }
}
const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

