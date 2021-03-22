
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

// arrow 함수를 만들어 이름이 hello1 인 변수에 할당

const hello1 = () => {
    console.log('hello1');
};
    //함수의 매개변수
    //함수를 호출할 때 값을 지정
    //매개변수가 하나일 때, 괄호 생략 가능

const hello2 = (name) => {
    console.log('hello2', name);
};

const hello3 = (name, age) => {
    console.log('hello3', name, age);
};
    //함수의 리턴
    //함수를 실행하면 얻어지는 값

const hello4 = name => {
    return `hello4 ${name}`;
};

const hello5 = name => `hello5 ${name}`;

function Person(name, age) {
    console.log(this);
    this.name = name;
    this.age = age;
}

const p = new Person('Elina', 30);
console.log(p, p.name, p.age);

const h = new Person('Hoomin', 29);
console.log(h, h.name, h.age);

// const Cat = (name, age) => {
//     console.log(this) // TypeError: Cat is not a constructor
//     this.name = name;
//     this.age = age;
// };
// const c = new Cat('나옹', 2);  //안된당
//

function plus(base) {
    return function (num) {
        return base + num;
    }
}

const plus5 = plus(5);
console.log(plus5(10)); //15

const plus7 = plus(7);
console.log(plus7(8)); //15

// 함수를 인자로 하여 함수를 호출하기

function hello(callback) {
    console.log('hello');
    callback();
}

hello(function () {
    console.log('콜백');
});

//생성자 함수
function A() {}

const a = new A();
console.log(a, typeof a);
console.log(A());

// 생성하면서 데이터 넣기
function B(name, age) {
    console.log(name,age);
}

const b = new B();
const c = new B('Elina', 30);
console.log(B());

//prototype 상속

function Person() {}

Person.prototype.hello = function () {
    console.log('hello');
};

function Korean(region) {
    this.region = region;
    this.where = function () {
        console.log('where', this.region);
    };
}

Korean.prototype = Person.prototype;

const k = new Korean('Seoul');

k.hello();
k.where();

console.log(k instanceof Korean);
console.log(k instanceof Person);
console.log(k instanceof Object);