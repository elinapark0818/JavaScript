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
console.log(user);