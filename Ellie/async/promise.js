'use strict';

// Promise is JavaScript object for asynchronous operation
// State : pending -> fulfilled or rejected
// Producer vs Consumer 의 차이점

// 1. Producer
// when new Promise is created, the executor runs automatically
const promise = new Promise((resolve, reject) => {
    //doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(() =>{
        resolve('elina');
        // reject(new Error('no network'));
    },2000);
});

// 2. Consumers : then, catch, finally
promise
    .then((value) => {
    console.log(value);
    })
    .catch(error => {
    console.log(error);
    })
    .finally(() => {
    console.log('finally');
    });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});
fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num -1), 1000);
        });
    })
    .then(num => console.log(num));

// 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐔'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${hen} => 🐣`), 1000);
    });
const cook = egg =>
    new Promise(((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🥠`), 1000);
    }));

getHen() // 하나씩만 받아올때는 생략이 가능하다
.then(getEgg)
.then(cook)
.then(console.log);