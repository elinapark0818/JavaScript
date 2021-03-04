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