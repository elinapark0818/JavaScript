'use strict';

let globalName = 'global name';
{
    let name = 'elina';
    console.log(name);
    name = 'hello!!!';
    console.log(name);
}
console.log(name);
console.log(globalName);

// Contant

const daysInWeek = 7;
const maxNumber = 5;

// Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function 함수를 변수에 할당 가능하다

const count = 17; //integer
const size = 17.5; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number
const infinity = 1 / 0;
const negativeinfinity = -1 / 0;
const NaN = 'not a number' / 2;
console.log(infinity);
console.log(negativeinfinity);
console.log(NaN);

// bigInt
const bigInt = 1234567890123456789012345678901234567890n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

//string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = ``