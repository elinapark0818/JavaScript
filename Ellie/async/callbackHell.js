'use strict';

class DataStorage {
    loginData(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === 'elina' && password === '1234') ||
                    (id === 'hoomin' && password === '1234')) {
                    resolve(id);
                } else {
                    reject(new Error(' Wrong data'));
                }
            }, 2000);
            })}

    adminData(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (id === 'elina') {
                    resolve({id: 'elina', admin: 'admin'})
                } else {
                    reject(new Error('Admin is not access'));
                }
            }, 1000);
        })}
}

const dataStorage = new DataStorage();
const id = prompt('enter your ID');
const password = prompt('enter your PW');

dataStorage.loginData(id,password)
    .then(dataStorage.adminData)
    .then(data => alert(`Welcome ${data.id}, Access To your admin ${data.admin}`))
    .catch(console.log);



/*
console.log('-----------------');

function square(x, callback) {
    setTimeout(callback, 1000, x * x);
}

square(2, function (x) {
    square(x, function (x2) {
        square(x2, function (x3) {
            console.log(x3); // 256
        });
    });
});
*/