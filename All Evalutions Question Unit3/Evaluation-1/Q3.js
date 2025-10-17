

let arr = [
    [1,2,3,4],
    [1,2,3,4],
    [1,2,3,4],
    [1,2,3,4]
]


// output should be  10

let n = 4
let m = 4

let sum = 0
for(let i = 0; i < n; i++){
    for(let j = 0; j < m; j++){
        if( i !== 0 && i !== n-1 &&  j !==0 && j !== m-1){
            sum += arr[i][j]
        }
    }
}

console.log(sum)