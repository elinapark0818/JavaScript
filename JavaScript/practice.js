
//new Function(인자1,인자2,..., 함수의 바디);

const sum = new Function('a', 'b', 'c', 'return a + b + c');
console.log(sum(1,2,3));


// {
//     const i = 1;
//     const test = new Function('return i');
//     console.log(test());
// }

{
    const j = 2;
    const test = function () {
        return j;
    };
    console.log(test());
}