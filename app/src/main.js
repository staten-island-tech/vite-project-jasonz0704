import "./style.css";

const memeform = document.getElementById("memeform");
const topinput = document.getElementById("toptext");
const bottominput = document.getElementById("bottomtext");
const urlinput = document.getElementById("imageurl");

const toptext = document.getElementById("toptext");
const bottomtext = document.getElementById("bottomtext");
const memeimage = document.getElementById("memeimage");

//prevent the refresh

memeform.addEventListener("submit", function (e) {
  e.preventDefault();

  toptext.textContent = topinput.value;
  bottomtext.textContent = bottominput.value;
  memeimage.src = urlinput.value;
});
