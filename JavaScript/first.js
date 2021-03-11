console.log("Hello javaScript");
//
// const a = null;
// const b = undefined;
// const equals = false;
// console.log(equals);
//
// const c = 20;
// const d = 25;
// const e = 20;
//
// console.log(c < d);
// console.log(e <= d);
// console.log(e > c);
//
// const f = '안녕'
// const g = '하니?'
//
// console.log(f+g);
//
// const aa = 1;
// if (aa + 1 === 2) {
//     console.log('aa + 1 이 2입니다.');
//     const aa = 2;
//     console.log('if문 안의 a 값은?' + aa);
// }
// console.log('if문 안의 a 값은?' + aa);
//
//
// const aaa = 10;
// if (aaa > 15) {
//     console.log('a가 15보다 크다');
// } else {
//     console.log('a가 15보다 작다');
// }
//
// const bb = 10;
// if (bb === 5) {
//     console.log('bb는 5다.');
// } else if (bb === 10) {
//     console.log('bb는 10이다.');
// } else {
//     console.log('bb는 5도 10도 아니다.');
// }
//
//
// const device = 'galaxy note';
//
// switch (device) {
//     case 'iphone':
//         console.log('아이폰!')
//         break;
//     case 'ipad':
//         console.log('아이패드!')
//         break;
//     case 'galaxy note':
//         console.log('갤럭시 노트!')
//         break;
//     default:
//         console.log('모르겠다.')
// }
//
// // function add(ab, bc) {
// //     return ab + bc;
//
//
// // const sum = add(35,15)
// // console.log(sum);
//
// function hello(name) {
//     console.log('Hello,' + name + '!');
// }
// hello('Elina');
//
// function bye(name) {
//     return `Bye ${name}~~`;
// }
// // bye('ElinaPark');
// const result = bye('ElinaPark')
// console.log(result);
//
// function getGrade(score) {
//     if (score === 100) {
//         return 'A';
//     } else if (score >= 90) {
//         return 'B';
//     } else if (score >= 80) {
//         return 'C';
//     } else if (score >= 70) {
//         return 'D';
//     } else {
//         return 'F';
//     }
// }
// const grade = getGrade(49);
// console.log(grade)
//
// const Add = (ac, be) => {
//     return ac + be;
// }
// const sum = Add(5, 7);
// console.log(sum);
//
//
// const hi = (name) => {
//     console.log(`Hi, ${name}~!`);
// }
// hi('Elina');
//
//
//
// // const dogName = '초롱이';
// // const dogAge = 14;
// //
// // console.log(dogName);
// // console.log(dogAge);
//
// const dog = {
//     name: '초롱이',
//     age: 14,
//     love: 3000,
//     'key with space': 'blablabla',
// }
// console.log(dog);
// console.log(dog.name);
// console.log(dog.age);
// console.log(dog.love);
//
// const ironMan = {
//     name: '토니 스타크',
//     actor: '로버트 다우니 주니어',
//     alias: '아이언맨'
// };
// const { name } = ironMan;
// console.log(name);
//
// const captainAmerica = {
//     name: '스티븐 로저스',
//     actor: '크리스 에반스',
//     alias: '캡틴 아메리카'
// }
// console.log(ironMan);
// console.log(captainAmerica);
//
// function print({ alias, name, actor}) {
//     const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
//     console.log(text);
// }
// print(ironMan);
// print(captainAmerica);
//
// //비구조화할당 객체구조분해
//
// const cutydog = {
//     name: '망고',
//     sound: '김망고 낑낑!',
//     say: function say() {
//         console.log(this.sound); //여기서 this는 cutydog를(자기가 속해있는 함수) 의미
//     }
// }
// cutydog.say();
//
//
// const cat = {
//     name: '야통이',
//     sound: '미얏홍~!'
// };
//
// cat.say = cutydog.say;
// cutydog.say();
// cat.say();
//
// const numbers = {
//     m: 1,
//     n: 2,
//     get sum() {
//         console.log('sum 함수가 실행됩니다!');
//         return this.m + this.n;
//     }
// }
// console.log(numbers.sum);
// numbers.n = 5;
// console.log(numbers.sum);

//Getter함수는 특정 값을 조회하려고 할때(호출X),
// 특정코드를 실행시키고 연산된 값을 사용하는 것
//
// const crazydog = {
//     _name: '주보리',
//     get name() {
//         console.log('_name을 조회합니다..');
//         return this._name;
//     },
//     set name(value) {
//         console.log('이름이 바뀝니다..' + value);
//         this._name = value;
//     }
// };
//
// console.log(crazydog._name);
// crazydog.name = '김동이';
// console.log(crazydog._name);

// const numbers = {
//     _a: 1,
//     _b: 2,
//     sum: 3,
//     calculate() {
//         console.log('calculate');
//         this.sum = this._a + this._b;
//     },
//     get a() {
//         return this._a
//     },
//     get b() {
//         return this._b
//     },
//     set a(value) {
//         this._a = value;
//         this.calculate();
//     },
//     set b(value) {
//         this._b = value;
//         this.calculate();
//     }
// };
//
// console.log(numbers.sum);
// numbers.a = 5;
// numbers.b = 7;
// numbers.a = 9;
// console.log(numbers.sum);


//Setter 함수는 특정 값을 설정할 때마다
//Getter 함수는 특정 값을 조회할 때마다
// value를 파라미터로 가져와서 추가적으로 코드를 실행하고 싶을 때 쓴다
//
// const objects = [
//     {name: '초롱이'},
//     {name: '망고'}
// ];
// objects.push({
//     name: '보리'
// });
// console.log(objects);
// console.log(objects.length);
//
// const names = ['망고', '보리', '초롱'];
//
// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }
//
// let ii = 0;
// let isFun = false;
//
// while (!isFun) {
//     console.log(ii);
//     ii++;
//     if (ii === 30) {
//         isFun = true;
//     }
// }
//
// const nbs = [10, 20, 30, 40, 50];
//
// for (let nb of nbs) {
//     console.log(nb);
// }
//
// const doggy = {
//     name: '도기',
//     sound: '왈왈!',
//     age: 2
// };
// console.log(Object.entries(doggy));
// console.log(Object.keys(doggy));
// console.log(Object.values(doggy));
//
// for (let key in doggy) {
//     console.log(`${key}: ${doggy[key]}`);
// }
//
// for (let u = 0; u < 10; u++) {
//     if (u === 2) continue;
//     console.log(u);
//     if (u === 5) break;
// }
//
// function sumOf(nbs) {
//     let sum = 0;
//     for (let v = 0; v <nbs.length; v++) {
//         sum += nbs[v];
//     }
//     return sum;
// }
//
// const result = sumOf([1,2,3,4,5]);
// console.log(result);

function biggerThanThree(numbers) {
    const array = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 3) {
            array.push(numbers[i]);
        }
    }
    return array;
}

const numbers = [1,2,3,4,5,6,7];
console.log(biggerThanThree(numbers));
// export default biggerThanThree; 문제를 복사해왔지만, 안되길래 뺌..

const herodogs = [
    '김망고',
    '주보리',
    '김동이',
    '초롱이'
]
herodogs.forEach(hero => {
    console.log(hero);
})
//
// forEach 함수의 파라미터로는, 각 원소에 대하여 처리하고 싶은 코드를 함수로 넣어줍니다. 이 함수의 파라미터 hero는 각 원소를 가르키게 됩니다.
// 이렇게 함수형태의 파라미터를 전달하는 것을 콜백함수 라고 부릅니다. 함수를 등록해주면, forEach 가 실행을 해주는 거죠.

const array = [1,2,3,4,5,6,7,8];

// const squared = [];
// for (let a = 0; a < array.length; a++) {
//     squared.push(array[a] * array[a]);
// }
// console.log(squared);


// const sqaured = [];
// array.forEach(n => {sqaured.push(n * n);
// });
// console.log(sqaured);

// const square = n => n * n;
// const squared = array.map(square);
// console.log(squared);

const squared = array.map(n => n * n);
console.log(squared);

// map함수의 파라미터로 변화를주는 함수(변화함수)를 전달해준다
//내부의 모든 값에 대해 변화를 적용시켜 새로운 배열을 생성한다

const items = [
    {
        id:1,
        text: 'hello'
    },
    {
        id:2,
        text: 'bye'
    }
];
const texts = items.map(item => item.text);
console.log(texts);


// const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];
// const index = superheroes.indexOf('토르');
// console.log(index);

const todos = [
    {
        id: 1,
        text: '자바스크립트 입문',
        done: true,
    },
    {
        id: 2,
        text: '함수 배우기',
        done: true,
    },
    {
        id: 3,
        text: '객체와 배열 배우기',
        done: true,
    },
    {
        id: 4,
        text: '배열 내장함수 배우기',
        done: false
    }
]

//find는  첫번째로 찾은 값 자체를 반환한다

const tasksNotDone = todos.filter(todo => !todo.done);
console.log(tasksNotDone)

const num = [10, 20, 30, 40];
// const index = num.indexOf(30);
// const spliced = num.splice(index, 1);
// console.log(num);
// console.log(spliced);

const sliced = num.slice(0, 2);
console.log(sliced);
console.log(num);

// const value = num.shift();
// num.shift();
// console.log(value);
// console.log(num);

const value = num.pop();
console.log(value);
console.log(num);

num.unshift(1);
console.log(num);

num.push(50);
console.log(num);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// const concated = arr1.concat(arr2);
const concated = [...arr1, ...arr2];
console.log(concated);

const array1 = [1, 2, 3, 4, 5];
console.log(array1.join()); // 1,2,3,4,5
console.log(array1.join(' ')); // 1 2 3 4 5
console.log(array1.join(', '));

const all = [1, 2, 3, 4, 5];
let sum = all.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum);

const avg = all.reduce((accumulator, current, index, array) => {
    if (index === array.length - 1) {
        return (accumulator + current) / array.length;
    }
    return accumulator + current;
}, 0);
console.log(avg);

// const alphabets = ['a','a','a','b','c','c','d','e','e'];
// const count = alphabets.reduce((accumulator, current) => {
//     if (accumulator[current]) {
//         accumulator[current] += 1;
//     } else {
//         accumulator[current] = 1;
//     }
//     return accumulator;
// }, {})
//
// console.log(count);

// 퀴즈

// 10보다 큰 숫자는 몇개인지 구해보자

const btt = [1, 2, 3, 5, 10, 20, 30, 40, 50, 60];

const count = btt.reduce((accumulator, current) => {
    if (current > 10) {
        return accumulator + 1;
    } else {
        return accumulator;
    }
}, 0);

console.log(count);

//---------------------------------
//
// // forEach
// function countBiggerThenTen(numbers){
//     let cnt = 0
//     numbers.forEach(n => {
//         cnt += n>10 ? 1 : 0
//     })
//     return cnt
// }
//
// const count = countBiggerThenTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60])
// console.log(count)
//
// // 출력 : 5
//
// // for
// function countBiggerThenTen(numbers){
//     let cnt = 0
//     for(let i=0;i<numbers.length;i++) {
//         cnt += numbers[i]>10 ? 1 : 0
//     }
//     return cnt
// }
//
// const count = countBiggerThenTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60])
// console.log(count)
// // 출력 : 5
//
// // map
// function countBiggerThenTen(numbers){
//     let cnt = 0;
//     numbers.map((n) => {
//         cnt += n > 10 ? 1 : 0
//     })
//     return cnt
// }
//
// const count = countBiggerThenTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60])
// console.log(count)
// // 출력 : 5
//
// // filter
// function countBiggerThenTen(numbers){
//     let cnt = 0;
//     numbers.filter((n) => {
//         cnt += n > 10 ? 1 : 0
//     })
//     return cnt
// }
//
// const count = countBiggerThenTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60])
// console.log(count)
// // 출력 : 5
//
// // reduce
// function countBiggerThenTen(numbers){
//     let cnt = numbers.reduce((res, cval, idx, arr) => {
//         return res += cval > 10 ? 1 : 0
//     }, 0)
//     return cnt
// }
//
// const count = countBiggerThenTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60])
// console.log(count)
// // 출력 : 5

//---------------------------------------------------------------
function Animal(type, name, sound) {  //대문자를 사용한다
    this.type = type;
    this.name = name;
    this.sound = sound;
}

Animal.prototype.say = function () {
    console.log(this.sound);
}

const dog = new Animal('개', '망고', '낑낑');  //new 사용한다
const cat = new Animal('고양이', '야통', '얏호옹');

dog.say();
cat.say();

//

function Animal1(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
}

Animal1.prototype.say = function() {
    console.log(this.sound);
};
Animal1.prototype.sharedValue = 1;

function Dog(name, sound) {
    Animal1.call(this, '개', name, sound);
}
Dog.prototype = Animal1.prototype;

function Cat(name, sound) {
    Animal1.call(this, '고양이', name, sound);
}
Cat.prototype = Animal1.prototype;

const dog1 = new Dog('멍멍이', '멍멍');
const cat1 = new Cat('야옹이', '야옹');

dog1.say();
cat1.say();

//

class Am {
    constructor(type, name, sound) {
        this.type = type;
        this.name = name;
        this.sound = sound;
    }
    say() {
        console.log(this.sound);
    }
}

console.log(Am.prototype.say);

class DD extends Am {
    constructor(name, sound) {
        super('두더지', name, sound);
    }
}

class CC extends Am {
    constructor(name, sound) {
        super('오리너구리', name, sound);
    }
}

const dd = new DD('뚜지', '우헤헿');
const cc = new CC( '오구', '따란!');
const ogu = new CC('아기오구', '>_<');

dd.say();
cc.say();
ogu.say();

//

class Food {
    constructor(name) {
        this.name = name;
        this.brands = [];
    }
    addBrand(brand) {
        this.brands.push(brand)
    }
    print() {
        console.log(`${this.name} 판매하는 프랜차이즈 음식점들:`)
        console.log(this.brands.join(', '));
    }
}

const pizza = new Food('피자');
pizza.addBrand('반올림 피자샵');
pizza.addBrand('피자 알볼로');

const chicken = new Food('치킨');
chicken.addBrand('후라이드 참 잘하는 집');
chicken.addBrand('BBQ');

pizza.print()
chicken.print();

//

const array_ = [4, 6];
let text = array_.length === 0
    ? '배열이 비어있습니다'
    : '배열이 비어있지 않습니다.';

console.log(text);

console.log(!undefined);
console.log(!null);
console.log(!0);
console.log(!'');
console.log(!NaN);

// Falsy : null, undefined, 0, '', NaN
//     Truthy = Falsy가 아닌 것

//N을 입력받은 뒤, 구구단 N단을 출력하는 프로그램을 작성하시오.
// 출력 형식에 맞춰서 출력하면 된다.

for(let i = 2; i <= 9; i++) {
    console.log(i + '단');
    for(let j = 1; j <= 9; j++) {
        console.log(i + ' * ' + j + ' = ' + (i*j));
    }
}
//


console.log(true && 'hello'); // hello
console.log(false && 'hello'); // false
console.log('hello' && 'bye'); // bye
console.log(null && 'hello'); // null
console.log(undefined && 'hello'); // undefined
console.log('' && 'hello'); // ''
console.log(0 && 'hello'); // 0
console.log(1 && 'hello'); // hello
console.log(1 && 1); // 1

//-----------------------------------
// const dog = {
//     name: '멍멍이'
// };
//
// function getName(animal) {
//     return animal && animal.name;
// }
//
// const name = getName();
// console.log(name); // undefined

//----------------------------------

// const namelessDog = {
//     name: ''
// };
//
// function getName(animal) {
//     const name = animal && animal.name;
//     return name || '이름이 없는 동물입니다.';
// }
//
// const name = getName(namelessDog);
// console.log(name); // 이름이 없는 동물입니다.


//ES5
function calculateCircleArea1(r) {
    const radius = r || 1;
    return Math.PI * radius * radius;
}

const area1 = calculateCircleArea1();
console.log(area1); // 3.141592653589793


//ES6
function calculateCircleArea2(r = 1) {
    return Math.PI * r * r;
}

const area2 = calculateCircleArea2();
console.log(area2); // 3.141592653589793

//화살표
const calculateCircleArea = (r = 1) => Math.PI * r * r;

const area = calculateCircleArea();
console.log(area); // 3.141592653589793

//------------------------------

function getSound(animal) {
    const sounds = {
        개: '멍멍!',
        비둘기: '구구 구 구'
    };
    return sounds[animal] || '...?';
}

console.log(getSound('개')); // 멍멍!
console.log(getSound('비둘기')); // 구구 구 구
console.log(getSound('인간'));

function makeSound(animal) {
    const tasks = {
        개: () => {
            console.log('멍멍');
        },
        고양이() {
            console.log('야옹~');
        },
        참새() {
            console.log('짹짹!!!');
        }
    };

    const task = tasks[animal];
    if (!task) {
        console.log('...?');
        return;
    }
    task();
}

makeSound('고양이');
makeSound('참새');
makeSound('오리');

// const object = { a: 1, b: 2 };
// //
// // const { a, b } = object;
// //
// // console.log(a); // 1
// // console.log(b); // 2

// const object = { a: 1, b: 2 };
//
// function print({ a, b }) {
//     console.log(a);
//     console.log(b);
// }
//
// print(object);

//비구조화 할당시 기본값 설정1
// const object = { a: 1 };
//
// function print({ a, b = 2 }) {
//     console.log(a);
//     console.log(b);
// }
//
// print(object);
// // 1
// // 2

//비구조화 할당시 기본값 설정2(함수의 파라미터가 아니어도 된다.)
const object = { a: 1 };

const { a, b = 2 } = object;

console.log(a); // 1
console.log(b); // 2

//------------------------------------------
//비구조화 할당 시 이름바꾸기

// const animal = {
//     name: '멍멍이',
//     type: '개'
// };
//
// const nickname = animal.name;
//
// console.log(nickname); // 멍멍이

const animal = {
    name: '멍멍이',
    type: '개'
};

const { name: nickname } = animal
console.log(nickname); //멍멍이
//-----------------------------------------
//배열 비구조화 할당

// const array__ = [1, 2];
// const [one, two] = array__;
//
// console.log(one);
// console.log(two);

const array__ = [1];
const [one, two = 2] = array__;

console.log(one);
console.log(two);

//----------------------------------------

const deepObject = {
    state: {
        information: {
            name: 'Elina',
            languages: ['Java', 'Python', 'Javascript']
        }
    },
    score: 100
};

const { name, languages } = deepObject.state.information;
const { score } = deepObject;

const extracted = {
    name,
    languages,
    score
};
console.log(extracted);

//다른방법(조금 더 지저분해보이지만..)
// const {
//     state: {
//         information: { name, languages }
//     },
//     score
// } = deepObject;
//
// const extracted = {
//     name,
//     languages,
//     score
// };
// console.log(extracted);