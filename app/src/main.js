import "./style.css";

//prevent the refresh
document.getElementById("memeform").addEventListener("submit", function (e) {
  e.preventDefault();
});

const memeform = document.getElementById("memeform");
const topinput = document.getElementById("toptext");
const bottominput = document.getElementById("bottomtext");
const urlinput = document.getElementById("imageurl");

//when form submits generate meme
memeform.addEventListener("submit", (e) => {
  generatememe();
});

function generatememe() {
  /* const toptext = topinput.value;
  const bottomtext = bottominput.value;
  const imageurl = urlinput.value; */
  const memecanvas = document.querySelector(".memecanvas");
  memecanvas.insertAdjacentHTML(
    "afterbegin",
    `<div class="toptext">${topinput}</div>
    <img class="image" src="${urlinput}">
    <div class="bottomtext">${bottominput}</div>`
  );
  console.log("memegenerated");
}
