/* eslint-disable */
// import "bootstrap";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

// window.onload = function() {
//   //write your code here
//   console.log("Hello Rigo from the console!");
// };

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed on", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

const randArrayIndex = arr => {
  return Math.floor(Math.random() * arr.length);
};
function generateExcuse() {
  let theString =
    who[randArrayIndex(who)] +
    " " +
    action[randArrayIndex(action)] +
    " " +
    what[randArrayIndex(what)] +
    " " +
    when[randArrayIndex(when)];
  return theString;
}

document.getElementById("excuse").innerHTML = generateExcuse();

const buttonGenerate = () => {
  document.getElementById("excuse").innerHTML = generateExcuse();
};

document
  .getElementById("newExcuseBtn")
  .addEventListener("click", buttonGenerate);
