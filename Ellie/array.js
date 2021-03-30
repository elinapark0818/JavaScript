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

// sort 정렬하기
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
// 빈 배열은 true
// 하나라도 false 값이 있다면 false
const isBelowThreshold = (currentValue) => currentValue < 40; // 40보다 작은지

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true

const array2 = [41, 1, 30, 38, 22, 13, 9]; // 하나라도 콜백함수에 부합하지 않는 요소가 있다면 false
console.log(array2.every(isBelowThreshold)); // false

// 모든 배열요소 크기 테스트
function isBigEnough(element, index, array) {
    return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough);   // false
[12, 54, 18, 130, 44].every(isBigEnough); // true

// 화살표 함수
[12, 5, 8, 130, 44].every(elem => elem >= 10); // false
[12, 54, 18, 130, 44].every(elem => elem >= 10); // true

// some
// 빈 배열은 false
// 하나라도 true 값이 있다면 true
const array = [1, 2, 3, 9, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even)); // true

// 배열 요소 테스트
function isBiggerThan10(element, index, array) {
    return element > 10;
}
[2, 5, 8, 1, 4].some(isBiggerThan10);  // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true

//화살표 함수
[2, 5, 8, 1, 4].some(elem => elem > 10);  // false
[12, 5, 8, 1, 4].some(elem => elem > 10); // true

// map
const array4 = [1, 4, 9, 16];
const map1 = array4.map(x => x * 2);
console.log(map1); // expected output: Array [2, 8, 18, 32]

// 인자를 받는 함수를 이용하여 숫자배열 재구성
const nums = [1, 4, 9];
const doubles = nums.map(function (num) {
    return num * 2;
});
console.log(doubles);
console.log(nums);

// ASCII 인코딩 값을 요소로 갖는 배열
const map = Array.prototype.map;
const a = map.call('Hello World', function (x) {
    return x.charCodeAt(0);
});
console.log(a);
// a는 이제 [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]

// filter
// 주어진 함수의 테스트를 통과하는 요소를 모아서 새로운 배열로 반환하기
const words = ['spray', 'limit', 'elite', 'hooming','elinapark'];
const result = words.filter(word => word.length > 6);
console.log(result); // ["hooming", "elinapark"]

// reduce
const sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(sum); // 6

// 화살표함수
const total = [ 10, 11, 12, 13 ].reduce(
    ( accumulator, currentValue ) => accumulator + currentValue,
    0
);
console.log(total); // 46

// Note! : 객체로 이루어진 배열에 들어 있는 값을 합산하기 위해서는 반드시 초기값을 지정해야한다
const initialValue = 0;
const sum2 = [{x: 3}, {x:4}, {x:5}].reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.x;
},initialValue)
console.log(sum2) //  12
// 화살표함수로 바꾸면 깔끔
// const initialValue = 0;
// const sum3 = [{x: 3}, {x:4}, {x:5}].reduce(
//     (accumulator, currentValue) => accumulator + currentValue.x
//     ,initialValue
// );
// console.log(sum3)

//중복값 제거하기
let arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
let result1 = arr.sort().reduce((accumulator, current) => {
    const length = accumulator.length
    if (length === 0 || accumulator[length - 1] !== current) {
        accumulator.push(current);
    }
    return accumulator;
}, []);
console.log(result1); //[1,2,3,4,5]

// reduceRight

const array7 = ["1", "2", "3", "4", "5"];
const left  = array7.reduce(function(prev, cur)      { return prev + cur; });
const right = array7.reduceRight(function(prev, cur) { return prev + cur; });

console.log(left);  // "12345"
console.log(right); // "54321"