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

// 2. await : ✨
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1000);
    return '🍎';
}

async function getBanana() {
    await delay(1000);
    return '🍌';
}

async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

// 이 또한 콜백지옥
//function pickFruits() {
//    return getApple()
//        .then(apple => {
//            return getBanana()
//                .then(banana => `${apple} + ${banana}`);
//        });
//}

pickFruits().then(console.log);