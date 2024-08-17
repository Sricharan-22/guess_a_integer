"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Answer";
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".number").textContent = 13;
// document.querySelector(".display_score").textContent = 10;
const secret_number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "No number :(";
  } else if (guess === secret_number) {
    document.querySelector(".message").textContent = "Correct answer";
    document.querySelector(".header_box").style.width = "150px";
    document.querySelector("body").style.backgroundColor = "#86AB89";
    document.querySelector(".check").style.backgroundColor = "#86AB89";
    document.querySelector(".number").textContent = secret_number;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".display_hs").textContent = highscore;
    }
  } else if (guess > secret_number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "guess is high";
      score = score - 1;
      document.querySelector(".display_score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "Sorry, try again";
      document.querySelector(".display_score").textContent = 0;
    }
  } else if (guess < secret_number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "guess is low";
      score = score - 1;
      document.querySelector(".display_score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "Sorry, try again";
      document.querySelector(".display_score").textContent = 0;
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  const secret_number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing..!";
  document.querySelector(".display_score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".header_box").style.width = "150px";
  document.querySelector("body").style.backgroundColor = "#86AB89";
  document.querySelector(".check").style.backgroundColor = "#86AB89";
});
