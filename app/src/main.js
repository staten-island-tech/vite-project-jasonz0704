import "./style.css";

const memeform = document.getElementById("memeform");
const topinput = document.getElementById("toptext");
const bottominput = document.getElementById("bottomtext");
const urlinput = document.getElementById("imageurl");

//prevent the refresh

memeform.getElementById("memeform").addEventListener("submit", function (e) {
  e.preventDefault();

  toptext.textContent = topinput.value;
  bottomtext.textContent = bottominput.value;
  memeimage.src = urlinput.value;
});
