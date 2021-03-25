import "./style.css";

const open = document.getElementById("open");
const close = document.getElementById("close");
const modal = document.querySelector(".modal-wrapper");
open.onclick = () => {
    console.log("ffasd");
    modal.style.display = "flex";
};
close.onclick = () => {
    modal.style.display = "none";
};
