

let arr = [100,8,97,2,1];
let left = 0
let right = arr.length-1
let ramStone = 0
let shyamStones = 0



while(left < right){
    if(ramStone  < shyamStones){
        ramStone += arr[left];
        left++
    }else {
        shyamStones += arr[right];
        right--
    }
    
}


