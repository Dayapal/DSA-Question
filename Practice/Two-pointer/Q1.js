
// find the target sum 

let arr = [8,2,3,4,2,5,7,6] 
let k = 92;
function targetSum(arr,k){
    arr.sort((a,b) => a - b)
    let l = 0
    let h = arr.length -1;
    while(l < h){
        if(arr[l] + arr[h]==k){
            return true
        }
        if(arr[l] + arr[h] > k){
            h--
        }else{
            l++
        }
        
}
return false
}


console.log(targetSum(arr,k))