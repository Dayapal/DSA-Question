

reverseNum = ((num) =>{
    let reverse = 0
    while(num > 0){
        let unitDigit = num%10;
        reverse = (reverse *10) + unitDigit;
        num = Math.floor(num/10)
    }
    return reverse
})

let num = 1234  // 4321
console.log(reverseNum(num))  // 4321