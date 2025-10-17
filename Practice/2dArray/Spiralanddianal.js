
let n = 3

let arr = [1,2,3,4,5,6,7,8,9]

function spiralsAndDiagonals(N,arr){
  
    let mat = []
    for(let i = 0; i < N; i++){
      let arr1 = []
      for(let j = 0; j < N; j++){
        arr1.push(0)
      }
      mat.push(arr1)
    }
    let l = 0;
    let r = N-1;
    let t = 0;
    let b = N-1;
    let count = 0
    let count1 = 0
    while(count < N*N){
      
      
      for(let i = l; i <= r && count < N*N; i++){
        mat[t][i] = arr[count1++]
        count++
      }
      t++
      
      for(let i = t; i <= b && count < N*N; i++){
        mat[i][r] = arr[count1++]
         count++
      }
      r--
      
      for(let i = r; i >= l && count < N*N; i--){
        mat[b][i] = arr[count1++]
         count++
      }
      b--
      
      for(let i = b; i >= t && count < N*N; i--){
        mat[i][l] = arr[count1++]
         count++
      }
      l++
      
    }
    let sum = 0
     for(let i = 0; i < mat.length; i++){
      for(let j = 0; j < mat.length; j++){
        if(i===j || i+j === mat.length-1 ){
          sum += mat[i][j]
        }
      }
    }
    console.log(sum)
  
  }