const spawn = require("child_process").spawn;

const process = spawn("python", ["./hello.py", 4]);

var result;
var newNum = 0;

function assignVar(val) {
  newNum = val;
}

function outputNumTimeTen() {
  //newNum = newNum * 10;
  printNum();
}

function printNum() {
  console.log(newNum);
}

process.stdout.on("data", (data) => {
  result = parseInt(data.toString());
});

process.stdout.on("end", () => {
  assignVar(result);
  outputNumTimeTen();
});
