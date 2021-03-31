'use strict';
// async & await
// clear style of using promise :)

// 1. async
async function fetchUser() {
    // do network request in 10 secs....
    return 'elina'
}
// async , 코드 블록이 자동으로 Promise로 바뀐다
const user = fetchUser();
user.then(console.log);

console.log(user);