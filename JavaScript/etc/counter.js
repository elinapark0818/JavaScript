// const number = document.getElementById("number");
// const increase = document.getElementById("increase");  //ID가 있을 때(html)
// const decrease = document.getElementById("decrease");
//
// increase.onclick = () => {
//     const current = parseInt(number.innerText, 10);
//     number.innerText = current + 1;
// };
//
// decrease.onclick = () => {
//     const current = parseInt(number.innerText, 10);
//     number.innerText = current - 1;
// };
// parseInt 는 문자열을 숫자로 변환해주는 함수입니다. 두번째 10을 넣어준 것은, 10진수로 숫자를 받아오겠다는 의미


const number = document.getElementById("number");
const buttons = document.querySelectorAll("button"); //id가 없을 때(html) 태그이름으로 찾기
const [increase, decrease] = buttons;

increase.onclick = () => {
    const current = parseInt(number.innerText, 10);
    number.innerText = current + 1;
};

decrease.onclick = () => {
    const current = parseInt(number.innerText, 10);
    number.innerText = current - 1;
};