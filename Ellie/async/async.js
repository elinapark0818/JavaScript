'use strict';
// async & await
// clear style of using promise :)

// 1. async
function fetchUser() {
    return new Promise((resolve, reject) => {
        // do network request in 10 secs....
        resolve('elina');
        reject('not found');
    })
}
const user = fetchUser();
user.then(console.log);

console.log(user);