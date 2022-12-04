const fs = require("fs");

let input = fs.readFileSync("./02.txt").toString().trim();

let [X, Y, Z, W, D, L] = [1, 2, 3, 6, 3, 0];

let guides = input.split("\n").map((l) => l.split(" "));

let score = 0;

for (let g of guides) {
  let [f, s] = [g[0], g[1]];
  score += s === "X" ? X : s === "Y" ? Y : Z;
  s = s === "X" ? "A" : s === "Y" ? "B" : "C";
  score +=
    f === s
      ? D
      : (f === "A" && s === "B") ||
        (f === "B" && s === "C") ||
        (f === "C" && s === "A")
      ? W
      : L;
}

console.log(score);

// end of first part

score = 0;

for (let g of guides) {
  let [f, s] = [g[0], g[1]];
  let tmp;
  score += s === "X" ? L : s === "Y" ? D : W;
  tmp =
    s === "Y"
      ? f === "A"
        ? "X"
        : f === "B"
        ? "Y"
        : "Z"
      : s === "X"
      ? f === "A"
        ? "Z"
        : f === "B"
        ? "X"
        : "Y"
      : f === "A"
      ? "Y"
      : f === "B"
      ? "Z"
      : "X";
  score += tmp === "X" ? X : tmp === "Y" ? Y : Z;
}

console.log(score);
