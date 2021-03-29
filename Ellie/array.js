'use strict';

// Array 🎉

// Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// Index position
const fruits = ['🍅', '🍒'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length - 1]); // 배열의 마지막

// Looping over an array
// print all fruits
console.clear()
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
