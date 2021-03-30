'use strict';

// JavaScript is synchronous 자바스크립트는 동기적이다
// Excute the code block by orger after hoisting.
// hoisting : var, function declaration 과 같은 선언들이 제일 위로 올라가는 것

console.log('1');
setTimeout( () => console.log('2'), 1000); // 브라우저 API, 브라우저에게 먼저 요청한다
console.log('3');

// Synchronous callback
function printImmediately(print) {
    print();
} // 호이스팅이 되었을 거다. 맨위로

printImmediately(()=>console.log('hello'));

// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
} // 호이스팅

printWithDelay(()=> console.log('async callback'), 2000);