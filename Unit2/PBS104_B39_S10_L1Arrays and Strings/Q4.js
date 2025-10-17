
function reverseOdds(N, A){
    //write code here
    let odd = []
    let reverse_odd = []
    let reverse_odd1 = ""
    for(let i = 0; i < A.length; i++){
      if(A[i] % 2 === 1){
        odd.push(A[i])
      }
    }
    for(let i = odd.length-1; i >= 0; i--){
       reverse_odd.push(odd[i])
       reverse_odd1 += odd[i] + " "
    }
    console.log(reverse_odd.length)
    console.log(reverse_odd1)
}


// input 
// 5
// 38 1 67 23 31 

// ouput 
// 4
// 31 23 67 1 
