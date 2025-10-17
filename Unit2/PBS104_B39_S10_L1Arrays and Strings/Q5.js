

function reverseEvens(N,A){
    //write code here
    let even = []
    let reverse_even = []
    let reverse_even1 = ""
    for(let i = 0; i < A.length; i++){
      if(A[i] % 2 === 0){
        even.push(A[i])
      }
    }
    for(let i = even.length-1; i >= 0; i--){
       reverse_even.push(even[i])
       reverse_even1 += even[i] + " "
    }
    console.log(reverse_even.length)
    console.log(reverse_even1)
}


// input 5
// 1 2 3 4 5

// ouput 
// 4 2