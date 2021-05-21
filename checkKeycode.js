// JavaScript source code
const div = document.querySelector("#parent");
const info = document.createElement("div");
info.classList.add("music");
div.appendChild(info);


document.addEventListener("keydown", function (e) {
    let b = e.keyCode;
    let c = e.key;
    info.textContent = " Key: " + c.toUpperCase() + "; " + "Keycode: " + b;
});