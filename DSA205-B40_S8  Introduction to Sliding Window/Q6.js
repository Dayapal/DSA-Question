
//  input 
// 10 3
// -1 -1 -2 1 -2 4 1 9 3 9


// output   >   21


let arr = [-1, -1, -2, 1, -2, 4, 1, 9, 3, 9]
let k = 3
let res = -Infinity
for (let i = 0; i <= arr.length-k; i++) {
    let sum = 0;
    for (let j = i; j < i + k; j++) {
        sum = sum + arr[j]
    }
    res = Math.max(res, sum)
}
console.log(res)