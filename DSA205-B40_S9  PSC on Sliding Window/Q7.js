function sumOfSubarray(k,arr){
    let left = 0;
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
      sum += arr[i];
      while( sum > k && left <= i){
        sum -= arr[left];
        left++
      } 
      if(sum ==k ){
        console.log("Yes")
        return;
      }
    }
     console.log("No")
  }
let arr = [1, 2, 3, 7, 5];
let k = 12;

sumOfSubarray(k,arr)
