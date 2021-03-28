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

// Computed properties 계산된 프로퍼티즈
// key should be always string
console.log(hoo.name); //코딩하는 순간 받아올때 쓴다
console.log(hoo['name']); //string 가져오기 런타임에서 결정될 때 쓴다(뭔지 정확히 모를때..?)
hoo['hasJob'] = true;
console.log(hoo.hasJob);

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(hoo, 'name');
printValue(hoo, 'age'); //동적으로 key에 관련된 값을 불러올때 유용하게 사용될 수 있다










const elina = {name: 'elina', age: 30};