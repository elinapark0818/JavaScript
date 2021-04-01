'use strict';

// Todo: F(0) = 0, F(1) = 1일 때, 2 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 점화식
// F0 = 0;
// F1 = 1;
// Fn+2 = Fn+1 + Fn
// F(n) = F(n-1) + F(n-2)
// F(1) = F(2) = 1

function elinaFibonacci(num) {
    let previous = 0;
    let current = 1;
    let last = 0;
    for (let number = 1; number < num; number++) {
        last = previous + current;
        previous = current;
        current = last;
    }
    return last;
}

console.log(elinaFibonacci(33) + history);


// 다른사람
function fibonacci(number) {
    if (number < 2) return number;
    return fibonacci(number - 1) + fibonacci(number - 2);
}

console.log(fibonacci(13) + history);


// 또 다른 사람
function otherFibonacci(num) {
    let answer = 0;
    if (num <= 1) {
        return num;
    } else if (num > 1) {
        answer = fibonacci(num - 1) + fibonacci(num - 2);
    }
    return answer;
}

console.log(otherFibonacci(10) + history);


// 또또 다른 사람
let a, b, result;
a = 0;
b = 1;
for (let i = 1; i < 100; i++) {
    console.log(result + " ");
    result = a + b;
    a = b;
    b = result;
}
console.log(result);

// 또또또 다른 사람
function aFibonacci(n) {
    if (n <= 2) {
        return 1;  //2번째 까지의 값은 1이므로 1을 리턴
    }
    let i = 1
    let num1 = 0;
    let num2 = 1;
    let result;

    while (i < n) {  //숫자 n이 될때까지 반복
        result = num1 + num2;
        num1 = num2;
        num2 = result;
        i++;
    }
    return result;
}

console.log(aFibonacci(13));