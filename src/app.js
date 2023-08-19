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
let whoDisplay = [...who];
let actionDisplay = [...action];
let whatDisplay = [...what];
let whenDisplay = [...when];

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

const table = document.getElementById("excuseTable");

function loopArrayToTable() {
  // set array lengths the same
  let maxLength = 0;
  for (var i = 0; i < arguments.length; ++i) {
    if (arguments[i].length >= maxLength) {
      maxLength = arguments[i].length;
    }
  }
  for (var i = 0; i < arguments.length; ++i) {
    if (arguments[i].length < maxLength) {
      for (let x = arguments[i].length; x < maxLength; x++) {
        arguments[i].push(" ");
      }
    }
  }

  // create table
  let rows = [0];
  for (var i = 0; i < arguments.length; ++i) {
    let rowCount = 1;
    for (item in arguments[i]) {
      if (!rows[rowCount]) {
        rows[rowCount] = table.insertRow(-1);
      }
      const cell = rows[rowCount].insertCell(-1);
      cell.innerHTML = arguments[i][item];
      rowCount++;
    }
  }
}

loopArrayToTable(whoDisplay, actionDisplay, whatDisplay, whenDisplay);
console.log(whoDisplay);
