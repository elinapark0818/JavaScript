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