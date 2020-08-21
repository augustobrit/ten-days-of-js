// var - GLOBAL | FUNCTION | REASSIGNED (HOISTING)
// let - BLOCK | FUNCTION | REASSIGNED
// const - BLOCK | FUNCTION

const readline = require('readline');
const PI = Math.PI;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true,
});

rl.on('line', (line) => {
  let i = parseFloat(line);
  let r = parseFloat(i);
  let perimeter = 2 * PI * r;
  let area = PI * Math.pow(r, 2);

  console.log(area);
  console.log(perimeter);
});
