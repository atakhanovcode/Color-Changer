let color = document.querySelector(".color");
let colorTxt = (document.querySelector(".color-text").innerHTML = color.value);
console.log((color.value = "#ffffff"));
let body = document.querySelector("body");
function myFnc() {
  body.style.backgroundColor = color.value;
  document.querySelector(".color-text").innerHTML = color.value;
}
