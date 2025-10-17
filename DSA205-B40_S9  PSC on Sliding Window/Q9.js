

function minExpenses(arr,k){
    let stanley = Infinity
    let minSum = 0
    for(let i = 0; i < k; i++){
      minSum += arr[i]
    }
    stanley = minSum
    for(let i = k; i < arr.length; i++){
      minSum = minSum - arr[i - k] + arr[i]
    }
    stanley = Math.min(stanley, minSum)
    console.log(stanley)
  }
  
  let arr = [9,9,-5,9,5]
  let k = 3;
  
  minExpenses(arr,k)