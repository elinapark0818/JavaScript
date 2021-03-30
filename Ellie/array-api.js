'use strict';

// Q1. make a string out of an array
const fruits11 = ['apple', 'banana', 'orange'];
console.log(fruits11.forEach((fruit) => console.log(fruit))); //하나씩 꺼내는거;;

//ellie
const result11 = fruits11.join(',');
console.log(result11); // apple,banana,orange

// Q2. make an array out of a string
const fruits12 = '🍎, 🥝, 🍌, 🍒';
const fruits13 = [];
console.log(fruits13.concat(fruits12));

// ellie
const result12 = fruits12.split(',', 3);
console.log(result12); // ["🍎", " 🥝", " 🍌"]

// Q3. make this array look like this : [5,4,3,2,1]
const array11 = [1, 2, 3, 4, 5];
console.log(array11.sort(function (a, b) {
    return b - a;
}));

// ellie
const result13 = array11.reverse();
console.log(result13);
console.log(array11); //배열 자체도 순서가 바뀐다

// Q4. make new array without the first two elements
const array12 = [1, 2, 3, 4, 5];
// array12.shift()
// array12.shift()
// console.log(array12);

// ellie
// const result14 = array12.splice(0, 2); //배열자체를 수정
// console.log(result14);
// console.log(array12);

const result14 = array12.slice(2, 5); //배열에서 원하는 부분만 리턴해서 받아오고 싶을 때
console.log(result14); // [3, 4, 5]
console.log(array12); // [1, 2, 3, 4, 5]

// **

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. fine a student with the score 90
const highScore = students.filter(students => students.score > 89);
console.log(highScore);

// ellie
const result15 = students.find((student) => student.score === 90);
console.log(result15);


// Q6. make an array of enrolled students
const enrolled = students.filter(students => students.enrolled === true);
console.log(enrolled);

// Q7. make an array containing only the student's scores
// result should be : [45, 80, 90, 66, 88]

const enrolledMap = students.map(function (enrolled) {
    return enrolled;
});
console.log(enrolledMap);

// Q8. check if there is a student with the score lower than 50

// Q9. compute student's average score

// Q10. make a string containing all the scores
// result should be : '45, 80, 90, 66, 88'


// Bonus! do Q10 sorted in ascending order
// result should be : '45, 66, 80, 88, 90'