import 'style.css';

const open = document.getElementById("open");
const close = document.getElementById("close");
const modal = document.querySelector(".modal-wrapper");

open.onclick = () => {
    modal.style.display = "flex";
};  //왜 안되는거니...왜..왜..정말 그럴거니?...플렉스라니까?...보여져야지..

close.onclick = () => {
    modal.style.display = "none";
};
