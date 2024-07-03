// เริ่มเขียนโค้ดตรงนี้
function multiplicationTable(x) {
  let result = "";
  for (let i = 1; i <= x; i++) {
    for (let j = 1; j <= x; j++) {
      result += j * i + "\t";
    }
    result += "\n";
  }
  return result;
}

console.log(multiplicationTable(5));
