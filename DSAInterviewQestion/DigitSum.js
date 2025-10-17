


function sumOfNumber(num) {
  
  let sum = 0;
  while (num > 0){
    let unitDigit = num%10;
    sum = sum + unitDigit;
    num = Math.floor(num/10)
  }
  return sum
}

let num = 1234
console.log(sumOfNumber(num))  // 10