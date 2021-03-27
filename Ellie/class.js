'use strict';

// Class
// - template
// - declare once
// - no data in

// Object
// - instance of a class
// - created many times
// - data in

// Object-oriendted programming
// class: template
// object: instance of a class

// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototyped-based inheritance 프로토타입을 기반으로 문법만 생긴거다

// Class declarations
class Person {
    //constructor 생성자
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    }
    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }

    const elina = new Person('elina', 30);
    console.log(elina.name);
    console.log(elina.age);
    elina.speak();

// Getter and setter
class User {
        constructor(firstName, lastname, age) {
            this.firstName = firstName;
            this.lastName = lastname;
            this.age = age;
        }
}
    get age() {
        return this._age
    }

    set age(value) {
        // if (value < 0) {
        //     throw Error('age cannot be negative!');
        // }
        this._age = value < 0 ? 0:value;
    }
}
const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

// Fields (public, private)
// Too soon

class Experiment {
    publicField = 2; // 외부에서 접근이 가능하다
    #privateField = 0; // #, Class 내부에서만 가능 외부에서 불가
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// Static properties and methods
// Too soon
class Article {
    static publisher = 'Dream Cording';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }
    static printPublisher() {
        console.log(Article.publisher);
    }
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // undefined
console.log(Article.publisher)
Article.printPublisher();
// Object에 상관없이(들어오는 데이터에 상관없이) 공통적으로 Class에서 쓸수있는 거라면 사용시 메모리 줄일 수 있다.

// Inheritance
// a way for one class to extend another class
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() {
        console.log(`drawing ${this.color} color of`);
    }
    getArea() {
        return width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw(); //부모 메소드도 출력하게끔
        console.log('📐');
    }
    getArea() {
        return (this.width * this.height) /2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(10, 20, 'red');
triangle.draw();
console.log(triangle.getArea());