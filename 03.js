const fs = require("fs");

const CHARS = "\0abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

let input = fs.readFileSync("./03.txt").toString();
let backpacks = input.split("\n").filter(s => s !== "").map(s => [s.slice(0, s.length/2), s.slice(s.length/2)])

let shares = [];

for (let b of backpacks) {
  let c1 = b[0];
  let c2 = b[1];
  let shared = "";
  for (let i of c1) {
    if (c2.includes(i)) {
      shared = i;
      break;
    }
  }
  shares.push(shared);
}

let sum = shares.map(c => CHARS.indexOf(c)).reduce((a, v) => a + v);

console.log(sum);

// end of first part

let groups = [];

let i = 0;
while (i < backpacks.length) {
  let group = backpacks.slice(i, i+3);
  groups.push(group.map(a => a.join("")));
  i += 3;
}

let badges = [];

for (let g of groups) {
  let [m1, m2, m3] = [g[0], g[1], g[2]];
  let badge = "";
  for (let i of m1) {
    if (m2.includes(i) && m3.includes(i)) {
      badge = i;
      break;
    }
  }
  badges.push(badge);
}

let sum2 = badges.map(b => CHARS.indexOf(b)).reduce((a, v) => a + v)

console.log(sum2);
