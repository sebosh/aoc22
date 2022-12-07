const fs = require("fs");

let input = fs.readFileSync("./06.txt").toString().trim();

for (let i = 4; i <= input.length; i++) {
  let sub = input.slice(i - 4, i);
  if (
    sub ===
    sub
      .split("")
      .filter((c, index) => sub.indexOf(c) === index)
      .join("")
  ) {
    console.log(i);
    break;
  }
}

// end of first part

for (let i = 14; i <= input.length; i++) {
  let sub = input.slice(i - 14, i);
  if (
    sub ===
    sub
      .split("")
      .filter((c, index) => sub.indexOf(c) === index)
      .join("")
  ) {
    console.log(i);
    break;
  }
}
