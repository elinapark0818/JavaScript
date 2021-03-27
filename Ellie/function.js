// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing  하나의 함수는 한 가지의 일만 하도록 만들어야 한다
// naming: doSomething, command, verb 동사형태로 이름을 지정하자
// e.g. createCardAndPoint -> createCard, createPoint 세분화가 가능한지 확인해보자
// function is object in JavaScript 자바스크립트에서 함수는 오브젝트이다.
function printHello() {
    console.log('Hello');
}

printHello();

function log(message) { //파라미터를 지정하는게 쓸모있다
    console.log(message);
}

log('param Hello');
log(1234); // type이 없어서 난해할 수 있다.

// Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}

const elina = {name: 'elina'};
changeName(elina);
console.log(elina);

// Default parameters ( added in ES6)
function showMessage(message, from = 'unknown') {
    // if (from === undefined) {
    //     from = 'unknown';
    // }
    console.log(`${message} by ${from}`);
}

showMessage('Hi elina!', 'Hoo');
showMessage('bye')

// Rest parameters (added in ES6)
function printAll(...args) { //배열 형태로 전달된다
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    // for (const arg of args) {
    //     console.log(arg);
    // }

    // args.forEach((arg) => console.log(arg));
}

printAll('dream', 'coding', 'ellie');


// 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.
// Local scope
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);

    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }

    // console.log(childMessage); // 자식이 부모 밖에서 안된다
    return undefined; //생략 가능
}

printMessage();
// console.log(message); // 안된다


// Return a value
function sum(a, b) {
    return a + b;
}

const result = sum(5, 7); //12
console.log(`sum: ${sum(5, 7)}`);

// Early return, early exit

// bad
function upgradeUser(user) {
    if (user.point > 10) {
        //long upgrade logic...
    }
}

// good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic...
}

// First-class function
// function are treated like any other variable
// can be assigned as a value to variable 변수에 할당이 됨
// can be passed as an argument to other functions 펑션에 파라미터로 전달된다
// can be returned by another function 리턴값으로 리턴된다

// 1. Function expression
// a function declaration can be called earlier than it is defined (hoisted) 호이스팅이 된다(선언 이전에 호출 가능)
// a function expression is created when the execution reached it
const print = function () { //함수에 이름이 없는 것을 anonymous function 이라고 함
    console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// Callback function using function expression 파라미터가 맞으면 불러
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

// anonymous function
const printYes = function () {
    console.log('Yes!');
};
// named function
// better debugging in debugger's stack traces 디버깅할때..
// recursions : 함수 안에서 함수 자신 스스로를 부르는것
const printNo = function print() {
    console.log('No!');
    // print(); //함수 안에서 함수 자신 스스로를 부르는것
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);


// Arrow function
// always anonymous
const simplePrint = function () {
    console.log('simplePrint!');
};

// const simplePrint = () => console.log('simplePrint!');

const add = (a, b) => a + b;

const simpleMultiply = (a, b) => {
    //do something more
    return a * b;
};

// IIFE : Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})();

//Fun quiz time❤
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder


function calculate(command, a, b) {
    switch (command) {
        case '+':
            console.log(a + b);
            break;
        case '-':
            console.log(a - b);
            break;
        case '*':
            console.log(a * b);
            break;
        case '/':
            console.log(a / b);
            break;
        case '%':
            console.log(a % b);
            break;
        default:
            console.log('unknown!');
            break;
    }
}

console.log(calculate('+',5,14));


function ellie(command, a, b) {
    switch (command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error ('unknown command');
    }
}
console.log(ellie('multiply', 5, 4));