// String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 
'>_<'
1 + 2 = ${1 + 2}`);

console.log("elina's \n\t note");

// Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(4 % 2); // remainder
console.log(2 ** 10); // exponentiation

// Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter +1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y; // x = x - y;
x *= y; // x = x * y;
x /= y; // x = x / y;

// Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6) // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2; //false

// || (or), 처음으로 true가 나오면 멈추고 더이상 비교하지 않는다 (finds the first truthy value)
// 가장 무거운걸 맨 뒤로
console.log(`or: ${value1 || value2 || check()}`);

// && (and), 처음으로 false가 나오면 더이상 비교하지 않는다 (finds the first falsy value)
// 가장 무거운걸 맨 뒤로
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableIbject && nullableObject.something
if (nullableObject != null) {
    nullableObject.something;
}

// check 는 쓸데없이 시간을 낭비하다가 true를 return 하는 함수이다.

function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('+_+');
    }
    return true;
}

// ! (not)
console.log(!value1); // 값을 반대로 바꿔준다. true니까 false 로

// Equality
const stingFive = '5';
const numberFive = 5;

// == loose equality, with type conversion  타입을 변경해서 검사한다
console.log(stingFive == numberFive); // true
console.log(stingFive != numberFive); // false

// === strict equality, no type conversion 타입이 다르면 다르다고 판단
console.log(stingFive === numberFive); // false
console.log(stingFive !== numberFive); // true

// object equality by refernce
const elina1 = {name: 'elina'};
const elina2 = {name: 'elina'};
const elina3 = elina1;
console.log(elina1 == elina2);  // 각각 다른 레퍼런스이기 때문에 false
console.log(elina1 === elina2); // false
console.log(elina3 === elina1); // true

// equality - puzzler
console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

//false: 0, null, undefined, NaN, ''


// conditional operators: if
// if, else if, else
const name = 'elina';
if (name === 'elina') {
    console.log('Elina! so beautiful');
} else if (name === 'hoo') {
    console.log('Hoo is so lovely');
} else {
    console.log('who R U?')
}

// Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'elina' ? 'yes' : 'no');

// Switch statement
// use for multiple if checks
// use for enum-like value check
// ust for multiple type checks in TypeScript
const brower = 'Chrome';
switch (brower) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('I love you!');
        break;
    default:
        console.log('same all!');
        break;
}

// Loop
// while loop, while the condition is truthy,
// body code is executed
let i = 5;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first, {}블럭을 먼저 실행한 다음 while을 검사한다
// then check the condition
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
    //inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops  피하는게 좋다
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j:${j}`);
    }
}

//break, continue
// Q1. iterate from 0 to 10 and print only even numbers(use continue)

for (let a = 0; a < 11; a++) {
    if (a % 2 !== 0) {
        continue;
    }
    console.log(`Q1: ${a}`);
}
//짝수만 출력하는게 낫다
for (let i = 0; i < 11; i++) {
    if (i % 2 === 0) {
        console.log(`q1: ${i}`);
    }
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let j = 0; j < 11; j++) {
    if (j > 8) {
        break;
    }
    console.log(`Q2: ${j}`);
}