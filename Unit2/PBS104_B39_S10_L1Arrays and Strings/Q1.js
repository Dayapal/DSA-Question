
function SmallestandLargestofall(N, A) {
    // Write code here
    for(let i = 0; i < A.length - 1; i++){
      for(let j = 0; j < A.length - 1 - i; j++){
        if( A[j] > A[j+1]){
          let temp = A[j]
          A[j] = A[j + 1]
          A[j + 1] = temp
        }
      }
      
    }
   
    console.log(A[0])
    let Max = A[A.length - 1]
    console.log(Max)

// -------------------------------------------------------------

// Optimiza solution

    let max = A[0]
    let min = A[0]
    for(let i = 0; i < A.length; i++){
      if (max > A[i]){
        max = A[i]
      }
      if(min < A[i]){
      min = A[i]
    }
    }
    console.log(max)
    console.log(min)
}



