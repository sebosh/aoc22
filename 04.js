const fs = require("fs");

let input = fs.readFileSync("./04.txt").toString().trim();
let pairs = input
  .split("\n")
  .map((s) => s.split(",").map((r) => r.split("-").map((n) => parseInt(n))));

let count = 0;

for (let pair of pairs) {
  let f = pair[0];
  let s = pair[1];
  if ((f[0] >= s[0] && f[1] <= s[1]) || (s[0] >= f[0] && s[1] <= f[1])) {
    count += 1;
  }
}

console.log(count);

// end of first part

count = 0;

for (let pair of pairs) {
  let f = pair[0];
  let s = pair[1];
  if (f[1] < s[0] || s[1] < f[0]) {
    continue;
  }
  count += 1;
}

console.log(count);
