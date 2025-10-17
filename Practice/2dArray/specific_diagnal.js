

function specificD(arr,k){
    
    let l;
    let r;
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i][j] === k){
                l = i;
                r = j
            }
        }
    }

    let diff = r - l;
    let sum = r + l
   
    let bag1 = "";
    let bag2 = "";
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(j - i === diff){
                bag1 += arr[i][j] + " ";
            }
            if(j + i === sum){
                bag2 += arr[i][j] + " ";
            }
        }
    }
    console.log(bag1)
    console.log(bag2)
}


let arr = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11, 12],
    [13,14,15,16]
]
let k = 10

specificD(arr,k)