console.log("Hello javaScript");

const a = null;
const b = undefined;
const equals = false;
console.log(equals);

const c = 20;
const d = 25;
const e = 20;

console.log(c < d);
console.log(e <= d);
console.log(e > c);

const f = '안녕'
const g = '하니?'

console.log(f+g);

const aa = 1;
if (aa + 1 === 2) {
    console.log('aa + 1 이 2입니다.');
    const aa = 2;
    console.log('if문 안의 a 값은?' + aa);
}
console.log('if문 안의 a 값은?' + aa);


const aaa = 10;
if (aaa > 15) {
    console.log('a가 15보다 크다');
} else {
    console.log('a가 15보다 작다');
}

const bb = 10;
if (bb === 5) {
    console.log('bb는 5다.');
} else if (bb === 10) {
    console.log('bb는 10이다.');
} else {
    console.log('bb는 5도 10도 아니다.');
}


const device = 'galaxy note';

switch (device) {
    case 'iphone':
        console.log('아이폰!')
        break;
    case 'ipad':
        console.log('아이패드!')
        break;
    case 'galaxy note':
        console.log('갤럭시 노트!')
        break;
    default:
        console.log('모르겠다.')
}

// function add(ab, bc) {
//     return ab + bc;


// const sum = add(35,15)
// console.log(sum);

function hello(name) {
    console.log('Hello,' + name + '!');
}
hello('Elina');

function bye(name) {
    return `Bye ${name}~~`;
}
// bye('ElinaPark');
const result = bye('ElinaPark')
console.log(result);

function getGrade(score) {
    if (score === 100) {
        return 'A';
    } else if (score >= 90) {
        return 'B';
    } else if (score >= 80) {
        return 'C';
    } else if (score >= 70) {
        return 'D';
    } else {
        return 'F';
    }
}
const grade = getGrade(49);
console.log(grade)

const Add = (ac, be) => {
    return ac + be;
}
const sum = Add(5, 7);
console.log(sum);


const hi = (name) => {
    console.log(`Hi, ${name}~!`);
}
hi('Elina');



// const dogName = '초롱이';
// const dogAge = 14;
//
// console.log(dogName);
// console.log(dogAge);

const dog = {
    name: '초롱이',
    age: 14,
    love: 3000,
    'key with space': 'blablabla',
}
console.log(dog);
console.log(dog.name);
console.log(dog.age);
console.log(dog.love);

const ironMan = {
    name: '토니 스타크',
    actor: '로버트 다우니 주니어',
    alias: '아이언맨'
}
const captainAmerica = {
    name: '스티븐 로저스',
    actor: '크리스 에반스',
    alias: '캡틴 아메리카'
}
console.log(ironMan);
console.log(captainAmerica);

function print(hero) {
    const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor} 입니다.`;
    console.log(text);
}
print(ironMan);
print(captainAmerica);

//비구조화할당 객체구조분해