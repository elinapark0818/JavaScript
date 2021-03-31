'use strict';

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

//userStorage.loginUser(id,password)
//    .then(userStorage.getRoles)
//    .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
//    .catch(console.log);

// 바꾸고 싶다...
async function changeAsync() {
    try {
        const user = await userStorage.loginUser(id,password);
        const userRole = await userStorage.getRoles(user);
        return `Hello ${userRole.name}, you have a ${userRole.role} role`;
        // console.log()
    } catch (error) {
        return error;
        // console.log(error);
    }
}

changeAsync().then(string => console.log(string));
//같은거다 changeAsync().then(console.log);

// changeAsync().then();