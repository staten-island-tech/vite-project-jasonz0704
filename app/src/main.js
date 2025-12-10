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

document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("cool")) {
    document.body.classList.add("warm");
    document.body.classList.remove("cool");
  } else {
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
  }
});
