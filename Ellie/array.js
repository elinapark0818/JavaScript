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

// for of
for (let fruit of fruits) {
    console.log(fruit);
}

// forEach

// fruits.forEach(function (fruit,index) {
//     console.log(fruit,index);
// })
fruits.forEach((fruit, index) => console.log(fruit, index));

// Addition, deletion, copy
// push : add an item to the end
console.clear()
fruits.push('🍌','🍉');
console.log(fruits);
// pop : remove an item from the end
fruits.pop();
console.log(fruits);

console.clear()
// unshift : add an item to the beginning
fruits.unshift('🍋','🍄');
console.log(fruits);
// shift : remove an item from the beginning
fruits.shift();
console.log(fruits);
fruits.shift();
console.log(fruits);

// Note! : shift/unshift are slower than pop/push

// splice: remove an item by index position
console.clear();
fruits.push('🥝','🍇','🍎');
console.log(fruits);
fruits.splice(1,1);
console.log(fruits);
fruits.splice(1,1,'🍙','🍜');
console.log(fruits);

// combine two arrays
const fruits2 = ['🌶','🧄'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);