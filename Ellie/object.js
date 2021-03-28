'use strict';

// Object
// one of the JavaScript's data types
// a collection of related data and/or fuctionality
// Nearly all objects in JavaScript are instances of Object
// Object = {key : value}; 오브젝트는 키와 밸류의 집합체다

// const name = 'elina';
// const age = 5;
// print(name, age);
// function print(name, age) {
//     console.log(name);
//     console.log(age);
// }

// Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const hoo = {name: 'hoo', age: 29}; //자바스크립트는 다이나믹 런타임 가능
print(hoo);

// with Javascript magic (dynamically typed language)
// can add properties later
hoo.hasJob = true;
console.log(hoo.hasJob); // 유지보수가 어렵당

// can delete properties later
delete hoo.hasJob;
console.log(hoo.hasJob);













const elina = {name: 'elina', age: 30};