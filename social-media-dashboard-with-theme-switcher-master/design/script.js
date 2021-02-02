const topbg = document.querySelector("header");
const body = document.querySelector("body");
const main = document.querySelector("main");
const ball = document.querySelector("#ball");
const overs = document.querySelectorAll(".overview_card");
const cards = document.querySelectorAll(".card");

const button = document.getElementById("button");
console.log(overs);
document.addEventListener("click", () => {
  topbg.classList.toggle("white");
  body.classList.toggle("text");
  main.classList.toggle("mainbg");
  ball.classList.toggle("ballanim");
  for (let i = 0; i < overs.length; i++) {
    overs[i].classList.toggle("card_bg");
  }
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.toggle("card_bg");
  }
});
