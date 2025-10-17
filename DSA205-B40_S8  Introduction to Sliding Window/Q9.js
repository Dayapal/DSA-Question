

// 1
// 5 5
// 1 5 1 3 2

let arr = [1,5,1,3,2];
let k = 5

let count  = 0;
let sum = 0
let start = 0
for(let i = 0; i < arr.length; i++){
    sum +=  arr[i];

    while( sum >= k && start <= i){
        sum -= arr[start];
        start++
    }
    count += (i - start +1)
}
console.log(count)