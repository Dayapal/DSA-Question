

function seperationOfOddEven(N, arr,Q) {
    //write code here
    let  odd = ""
    let  even = ""
    for(let i = 0; i < arr.length; i++){
      if(arr[i] % 2===1){
        odd += arr[i] + " "
      }else{
        even += arr[i] + " "
      }
    }
    if(Q===1){
      console.log(even + odd)
    }else{
      console.log(odd+ even)
    }
  }
  