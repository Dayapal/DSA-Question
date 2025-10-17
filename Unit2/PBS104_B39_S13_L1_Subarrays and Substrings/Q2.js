

function generateALlSubstr(N,A){
    //write code here
    for(let i = 0; i < A.length; i++){
      for(let j = i; j < A.length; j++){
        let bag = '';
        for(let k = i; k <= j; k++){
          bag += A[k]
        }
        console.log(bag)
      }
    }
   
  }
  