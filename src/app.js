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

function resetTable() {
  whoDisplay = [...who];
  actionDisplay = [...action];
  whatDisplay = [...what];
  whenDisplay = [...when];
  let tableItems = table.children[0].children;
  console.log(tableItems);
  console.log(tableItems.length);
  for (let i = tableItems.length; i > 1; i--) {
    console.log("removing item: " + tableItems[i - 1]);
    console.log(tableItems[i - 1]);
    tableItems[i - 1].parentNode.removeChild(tableItems[i - 1]);
  }
  loopArrayToTable(whoDisplay, actionDisplay, whatDisplay, whenDisplay);
}

function addCustomExcuse(e) {
  let changed = false;
  let customWho = document.getElementById("customWho").value;
  let customDid = document.getElementById("customDid").value;
  let customWith = document.getElementById("customWith").value;
  let customWhen = document.getElementById("customWhen").value;
  if (customWho) {
    who.push(customWho);
    changed = true;
    document.getElementById("customWho").value = "";
  }
  if (customDid) {
    action.push(customDid);
    changed = true;
    document.getElementById("customDid").value = "";
  }
  if (customWith) {
    what.push(customWith);
    changed = true;
    document.getElementById("customWith").value = "";
  }
  if (customWhen) {
    when.push(customWhen);
    changed = true;
    document.getElementById("customWhen").value = "";
  }
  if (changed) {
    resetTable();
  }
}

let customBtn = document.getElementById("customExcuseBtn");
customBtn.addEventListener("click", addCustomExcuse);
