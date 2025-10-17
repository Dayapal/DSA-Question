
function checkEven(N){
    if(N % 2 ===0){
        return true
    }
    else{
        return false
    }
}
let arr = [1,2,3];
let sum = 0
let count = 0
for(let i = 0; i < arr.length; i++){
    for(let j = i; j < arr.length; j++){
        let sum = 0;
        for(let k = i; k <= j; k++){
            // bag.push(arr[k])
            sum += arr[k]
        }
        if(checkEven(sum)){
            count += 1
        }
    }
}
console.log(count)