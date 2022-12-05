const fs = require("fs");

let input = fs.readFileSync("./05.txt").toString().trim();
let [init, instructions] = input.split("\n\n").map((s) => s.split("\n"));

let stacks = {};

for (let i = 0; i < init[0].length; i += 4) {
  let cs = init[init.length - 1][i + 1];
  for (let j = init.length - 2; j >= 0; j -= 1) {
    let c = init[j];
    stacks[cs] ??= [];
    stacks[cs].push(c[i + 1]);
  }
  stacks[cs] = stacks[cs].filter((i) => i !== " ");
}

for (let ins of instructions) {
  let [count, begin, end] = ins.match(/move (\d+) from (\d) to (\d)/).slice(1);
  for (let i = 0; i < parseInt(count); i += 1) {
    stacks[end].push(stacks[begin].pop());
  }
}

// end of first part

// for (let ins of instructions) {
//   let [count, begin, end] = ins.match(/move (\d+) from (\d) to (\d)/).slice(1);
//   let tmp = [];
//   for (let i = 0; i < parseInt(count); i += 1) {
//     tmp.push(stacks[begin].pop());
//   }
//   for (let i of tmp.reverse()) {
//     stacks[end].push(i);
//   }
// }

console.log(
  Object.values(stacks)
    .map((s) => s[s.length - 1])
    .join("")
);
