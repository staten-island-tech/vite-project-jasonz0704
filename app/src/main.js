import "./style.css";

const memeform = document.getElementById("memeform");

const topinput = document.getElementById("topinput");
const toptext = document.getElementById("toptext");

const bottominput = document.getElementById("bottominput");
const bottomtext = document.getElementById("bottomtext");

const urlinput = document.getElementById("urlinput");
const memeimage = document.getElementById("memeimage");

//prevent the refresh

memeform.addEventListener("submit", function (e) {
  e.preventDefault();

  toptext.textContent = topinput.value;
  bottomtext.textContent = bottominput.value;
  memeimage.src = urlinput.value;
});

//change the theme
document.querySelector(".themechanger").addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
});

//preset images
