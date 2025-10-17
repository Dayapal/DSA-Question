

// 1
// 3
// 1 2 3
// 4 5 6
// 7 8 9

// 7 4 1 2 3 6 9 8 
// let arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

let n = arr.length;             
let bag = ''
for(let i = 0; i < arr.length; i++){
    bag +=  arr[0][i] + " ";
}

for(let i = 1; i < arr.length; i++){
    bag += arr[i][n-1] + " ";
}

for(let i = n-2; i >=0; i--){
    bag += arr[n-1][i] + " ";
}
for(let i = n-2; i >=1; i--){
    bag += arr[i][0] + " ";
}
console.log(bag)