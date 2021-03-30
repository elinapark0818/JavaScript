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
fruits.push('🍌', '🍉');
console.log(fruits);
// pop : remove an item from the end
fruits.pop();
console.log(fruits);

console.clear()
// unshift : add an item to the beginning
fruits.unshift('🍋', '🍄');
console.log(fruits);
// shift : remove an item from the beginning
fruits.shift();
console.log(fruits);
fruits.shift();
console.log(fruits);

// Note! : shift/unshift are slower than pop/push

// splice: remove an item by index position
console.clear();
fruits.push('🥝', '🍇', '🍎');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, '🍙', '🍜');
console.log(fruits);

// combine two arrays
const fruits2 = ['🌶', '🧄'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// Searching
// indexOf : find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍇'));
console.log(fruits.indexOf('🍉')); // 없는 값은 -1
// includes
console.log(fruits.includes('🍅')); // true
console.log(fruits.includes('🍒')); // false

// lastIndexOf
console.clear();
fruits.push('🍅');
console.log(fruits);
console.log(fruits.indexOf('🍅'));
console.log(fruits.lastIndexOf('🍅'));

// sort

const numbers = [1, 10, 4, 5, 18, 2, 9];
console.log(numbers.sort());

// 오름차순 a - b
console.log(numbers.sort(function (a, b) {
    return a - b;
}));

// 내림차순 b - a
console.log(numbers.sort(function (a, b) {
    return b - a;
}));

// every

const isBelowThreshold = (currentValue) => currentValue < 40; // 40보다 작은지

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true

const array2 = [41, 1, 30, 38, 22, 13, 9]; // 하나라도 콜백함수에 부합하지 않는 요소가 있다면 false
console.log(array2.every(isBelowThreshold));
// expected output : false