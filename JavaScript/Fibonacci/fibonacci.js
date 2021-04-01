'use strict';

// Todo: F(0) = 0, F(1) = 1일 때, 2 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 점화식
// F0 = 0;
// F1 = 1;
// Fn+2 = Fn+1 + Fn
// F(n) = F(n-1) + F(n-2)

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
console.log(elinaFibonacci(13));


// 다른사람
function fibonacci(number) {
    if (number < 2) return number;
    return fibonacci(number - 1) + fibonacci(number - 2);
}
console.log(fibonacci(8))


// 또 다른 사람
function otherFibonacci(num) {
    let answer = 0;
    if( num <= 1 ) {
        return num;
    }
    else if( num > 1 ) {
        answer = fibonacci(num-1) + fibonacci(num-2);
    }
    return answer;
}
console.log(otherFibonacci(3));