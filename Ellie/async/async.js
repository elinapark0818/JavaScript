'use strict';
// async & await
// clear style of using promise :)

// 1. async
async function fetchUser() {
    // do network request in 10 secs....
    return 'elina'
}
// async : 코드 블록이 자동으로 Promise로 바뀐다
const user = fetchUser();
user.then(console.log);
console.log(user);


console.log('---------------------');
// 2. await : ✨
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000);
    throw new Error(`error: apple`);
    return '🍎';
}

async function getBanana() {
    await delay(1000);
    throw new Error(`error: banana`);
    return '🍌';
}

async function pickFruits() {
   let apple = null;
   try {
       apple = await getApple();
   } catch (error) {
       console.log(error);
   }
   let banana = null;
   try {
       banana = await getBanana();
   } catch (error) {
       console.log(error);
   }
    //const applePromise = getApple();
    //const bananaPromise = getBanana();
    //const apple = await applePromise;
    //const banana = await bananaPromise;
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

// 3. useful Promise APIs
function pickAllFruits() {
    return Promise.all([getApple(),getBanana()])
        .then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(),getBanana()]);
}
pickOnlyOne().then(console.log);

console.log('---------------------');

function delay(ms) {
    return new Promise (resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1000);
    return `🍎`;
}
async function getBanana() {
    await delay(1000);
    return `🍌`;
}


// 정리를 너무 잘하셔서 가져옴

// 방법 1: 무식한 코드
async function pickFruits() {
    // 프로미스 객체는 선언 즉시 바로 실행됨
    // getApple과 getBanana는 병렬(독립적)로 실행됨
    const applePromise = getApple();
    const bananaPromise = getBanana();
    // 동기화
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}
pickFruits().then(result => console.log(result));

// 방법 2: Promise APIs 사용
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()]).then(fruits => {
        return fruits.join(` + `);
    });
    // return Promise.all([getApple(), getBanana()]);
}
pickAllFruits().then(console.log);


// 번외: 비동기 처리중 먼저 리턴하는 녀석만 출력
function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);