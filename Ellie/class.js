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
}

const elina = new Person('elina', 30);
console.log(elina.name);
console.log(elina.age);
elina.speak();