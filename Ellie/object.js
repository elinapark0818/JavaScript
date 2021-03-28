'use strict';

// Object
// one of the JavaScript's data types
// a collection of related data and/or functionality
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
// const obj1 = {}; // 'object literal' syntax
// const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const elina = {name: 'elina', age: 30};
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

// Property value shorthand
const person1 = {name: 'bobby', age: 4};
const person2 = {name: 'yunjung', age: 5};
const person3 = {name: 'hooming', age: 7};


// Constructor function
const person4 = new Person('loovie', 10);
console.log(person4);

function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
}

// in operator: property existence check (key in object)
console.log('name' in elina);
console.log('age' in elina);
console.log('random' in elina); //false
console.log(elina.random); //undefined


// for..in vs for..of
// for (key in object)
// console.clear();
for (let key in hoo) {
    console.log(key);
}

// const array = [1,3,4,5];
// for (let i= 0; i < array.length; i++) {
//     console.log(array[i]);
// }


console.clear();
// for (value of iterable) 왜 안되지..
const array = [1, 3, 4, 5];
for (let value of array) {
    console.log(value);
}


// Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = {name: 'ellie', age: '20' };
const user5 = user;
user5.name = 'coder';
console.log(user);


// old way  요것도 왜 안될까.. 오호! 요건 let을 key 앞에 붙이니까 됐따
const user3 = {};
for (let key in user) {
    user3[key] = user[key];
}
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2); // 뒤에 있을수록 덮어씌여지는거다
console.log(mixed.color);
console.log(mixed.size);