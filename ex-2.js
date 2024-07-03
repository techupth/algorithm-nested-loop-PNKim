// เริ่มเขียนโค้ดตรงนี้
function printStar(x) {
  let result = "";
  for (let i = 0; i < x; i++) {
    for (let j = 0; j <= i; j++) {
      result += "*";
    }
    result += "\n";
  }
  return result;
}

console.log(printStar(5));
