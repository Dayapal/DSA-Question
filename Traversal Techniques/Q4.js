function countEvenSumSubarrays(arr, n) {
    //write code here
   let even = 1;
   let odd = 0;
   let tts = 0
   let sum = 0;
   for(let i = 0; i < n; i++){
     sum += arr[i]
     
     if(sum % 2 ==0){
       tts += even
       even++
     }else{
       tts += odd
       odd++
     }
   }
   console.log(tts)
   }

//    5
// 2 5 4 4 4