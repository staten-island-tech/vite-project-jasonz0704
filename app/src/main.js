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
    memeimage.src = "/images/blackfiller.png";
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
    memeimage.src = "/images/whitefiller.png";
  }
});

//preset images

const presetimages = [
  { name: "laughing cat", image: "/images/catlaugh.jpg" },
  { name: "staring cat", image: "/images/catstare.webp" },
  { name: "weirded out cat", image: "/images/catweird.jpg" },
  { name: "monkey ragebait", image: "/images/ragebait.jpeg" },
  { name: "shocked dog", image: "/images/shockeddog.jpg" },
  { name: "staring cat", image: "/images/catstare.webp" },
];

function inject(presetimages) {
  const presetbox = document.querySelector(".presetbox");
  presetbox.insertAdjacentHTML(
    "afterbegin",
    `<div class="presetcard">
        <h2 class= "presetimagename" " >${presetimages.name}</h2>
        <image class= "presetimageimage" id="presetimageimage" src=${presetimages.image}>
        <button class= "presetimagebutton" id="presetimagebutton">Use Image</button>
        </div>`
  );
}
presetimages.forEach((presetimages) => inject(presetimages));

const presetimageimage = document.getElementById("presetimageimage");
const presetimagebutton = document.querySelectorAll("presetimagebutton");

presetimagebutton.addEventListener("click", function () {
  memeimage.src = presetimageimage.src;
});
