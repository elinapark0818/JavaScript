//added in ES5
//use this for Vanila Javascript
'use strict';

// variable, rw(read/write)
// let (added in ES6)
let globalName = 'global name';
{
    let name = 'elina';
    console.log(name);
    name = 'hello!!!';
    console.log(name);
}
console.log(name);
console.log(globalName);

// Contant, r(read only)
// use const whenever possible
// only use let of variable needs to change


// Note!
// Immutable data types: primitive type, frozen objects (i.e. object.freeze())
// Mutable data types: all object by default are mutable in JavaScript

// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
console.log(daysInWeek);
const maxNumber = 5;
console.log(maxNumber);

// Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol : 값(value) 자체가 메모리에 저장된다
// object, box container object를 가리키는 레퍼런스가 메모리에 저장된다
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
const helloBob = `hi ${brendan}!`; //template leterals(string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);

//boolean
//false: 0, null, undefined, NaN, ''
//true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null 빈 값으로 선언된거야
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined 선언은 되었지만 정해진게 없어
let x;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol, create unique identifiers for objects 우선수위를 주고 싶을 때 고유한 식별자로
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);  //false 동일하지 않아

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1.description}`);
//.description을 이용해서 string으로 변환해서 출력해야한다.

//object, real-life object, data structure
const elina = { name: 'elina', age: 30};
elina.age = 23;

// Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`); // hello, string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); // 1, number
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); // 75,string
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`); // 4, number

// console.log(text.charAt(0)); // TypeError
