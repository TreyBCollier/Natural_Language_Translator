const spawn = require("child_process").spawn;

const process = spawn("python3", ["./translate.py", 172]);

var result;
var newNum = 0;

function assignVar(val) {
  newNum = val;
}

function outputNumTimeTen() {
  newNum = newNum * 10;
  printNum();
}

function printNum() {
  console.log(newNum);
}

process.stdout.on("data", (data) => {
  result = data.toString();
});

process.stdout.on("end", () => {
  console.log(result);
});
