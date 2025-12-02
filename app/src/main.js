import "./style.css";

document.getElementById("memeform").addEventListener("submit", function (e) {
  e.preventDefault();
});

const memeform = document.getElementById("memeform");
const topinput = document.getElementById("toptext");
const bottominput = document.getElementById("bottomtext");
const urlinput = document.getElementById("imageurl");
const memecanvas = document.getElementById("memecanvas");
const ctx = memecanvas.getContext("2d");

memeform.addEventListener("submit", (e) => {
  e.preventDefault();
  generatememe();
});

function generateMeme() {
  const toptext = topinput.value;
  const bottomtext = bottominput.value;
  const imageurl = urlinput.value;