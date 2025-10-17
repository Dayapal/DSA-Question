


// Function to find the length of the longest unique subarray
function longestUniqueSubarray(gifts, n) {
    // write code hee
    let i = 0
    let j = 0
    let obj = {};
    let max = 0
    while(j  < n){
      if(!obj[gifts[j]]){
        obj[gifts[j]] = 1;
         max = Math.max(j-i+1, max);
        j++
      }else{
        obj[gifts[i]]--;
        i++
      }
    }
    console.log(max)
    }