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
    memeimage.src = "./public/images/blackfiller.png";
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
    memeimage.src = "./public/images/whitefiller.png";
  }
});

//preset images

const preset = [
  { name: "laughing cat",
    image: "./public/images/catlaugh.jpg" },
  { name: "staring cat",
    image: "./public/images/catstare.webp" },
  { name: "weirded out cat",
    image: "./public/images/catweird.jpg" },
  { name: "monkey ragebait",
    image: "./public/images/ragebait.jpeg" },
  { name: "shocked dog",
    image: "./public/images/shockeddog.jpg" },
  { name: "staring cat",
    image: "./public/images/catstare.webp" },
];

function inject(presetimages) {
  const preset = document.querySelector(".preset");
  container.insertAdjacentHTML(
    "afterbegin",
    `<div class="presetcard">
        <h2 class= "name">${item.name}</h2>
        <image class= "image" src=${item.image} alt=${item.name}>
        <div class= "price">$${item.price}</div>
        <button class= "cartbutton">Add to Cart</button>
        </div>`
  );
}
item.forEach((item) => inject(item));
