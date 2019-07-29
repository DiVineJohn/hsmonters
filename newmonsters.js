const mainBoard = document.querySelector("#main");
const btn1 = document.querySelector(".btn.btn-dark");
const btn2 = document.querySelector(".btn.btn-primary");
const Beasts = [];

// initial construction of the beast:
class Beast {
  constructor() {
    // setting up some random magic
    this.randomNumber = Math.round(Math.random() * 27);
    this.superPosition = Math.round(Math.random() * 101);
    this.x = this.superPosition + "%";
    this.y = this.superPosition + "px";
    this.imageUrl = "images/" + (this.randomNumber + 1);
  }
  setPicture(pic) {
    this.imageUrl = pic + ".png";
  }

  setXpos(xpos) {
    // this.x = `${parseInt(this.x) + xpos}%`;
    this.x = parseInt(this.x) + xpos + "%";
  }

  //   buildBeast(w, h)
  buildBeast() {
    const beastUI = document.createElement("div");
    const img = document.createElement("img");
    img.src = this.imageUrl + ".png";
    beastUI.append(img);
    beastUI.style.position = "absolute";
    beastUI.style.left = this.x;
    beastUI.style.top = this.y;
    return beastUI;
  }
}

const beast1 = new Beast();
const beast2 = new Beast();
const beast3 = new Beast();

//
Beasts.push(beast1, beast2, beast3);

// draw(Beasts);

function draw() {
  mainBoard.innerHTML = "";
  //   for (let index = 0; index < Beasts.length; index++) {}
  Beasts.forEach(function(beast) {
    mainBoard.append(beast.buildBeast());
  });
  //   debugger;
}

function redraw() {
  mainBoard.innerHTML = "";
}

btn1.addEventListener("click", draw);
btn2.addEventListener("click", redraw);
// function draw(Beasts) {}

// setTimeout(() => {
//     monster1.setXpos(400)
//     draw(Beasts)
// }, 4000)
// const buttonL = document.createElement("button");
