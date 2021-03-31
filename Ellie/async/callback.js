'use strict';

// JavaScript is synchronous 자바스크립트는 동기적이다
// TODO : 호이스팅이 뭘까?
// Excute the code block by orger after hoisting.
// hoisting : var, function declaration 과 같은 선언들이 제일 위로 올라가는 것

console.log('1');
// FIXME:
setTimeout(() => console.log('2'), 1000); // 브라우저 API, 브라우저에게 먼저 요청한다
console.log('3');

printImmediately(() => console.log('hello'));

// Synchronous callback
function printImmediately(print) {
    print();
} // 호이스팅이 되었을 거다. 맨위로


// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
} // 호이스팅

printWithDelay(() => console.log('async callback'), 2000);


console.log('-------------------------------------------------------')


// 콜백지옥경험하기
class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === 'ellie' && password === 'dream') || (id === 'coder' && password === 'academy')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 2000);
        })

    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'ellie') {
                    resolve({name: 'ellie', role: 'admin'});
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        })
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.loginUser(
    id,
    password,
    (a, b) => {
        console.log(a + "" + b)
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error => {
                console.log(error);
            }
            );
    },
    error => {
        console.log(error);
    }
);

console.log('-----------');

userStorage.loginUser(id,password)
    .then(userStorage.getRoles)
    .then(data => alert(`Welcome ${data.id}, Access To your admin ${data.admin}`))
    .catch(console.log);