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