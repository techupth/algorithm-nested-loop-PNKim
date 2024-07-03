// เริ่มเขียนโค้ดตรงนี้
function printPattern(x) {
  let result = "";
  for (let i = 1; i <= x; i++) {
    for (let j = 1; j <= i; j++) {
      result += j + "\t";
    }
    result += "\n";
  }
  return result;
}

console.log(printPattern(5));
