const fs = require("fs");

let input = fs.readFileSync("./01.txt").toString().trim();

let elves = input
  .split("\n\n")
  .map((a) => a.split("\n").map((n) => parseInt(n)))
  .map((a) => a.reduce((a, v) => a + v));

elves.sort((a, b) => (a === b ? 0 : a < b ? 1 : -1)); // descending

console.log(elves[0]); // greatest

// end of first part

console.log(elves[0] + elves[1] + elves[2]); // top 3
