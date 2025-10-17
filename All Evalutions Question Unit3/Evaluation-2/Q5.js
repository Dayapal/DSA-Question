function sumOfBoundaryAndDiagonal(matrix){
    //write code here
    let sum = 0
    let n = matrix.length
    for(let i = 0; i < n; i++){
      for(let j = 0; j < n; j++){
        if(i ===0 || i === n-1 ){
          sum += matrix[j][i]
        }
      }
    }
    for(let  i = 1; i < n-1; i++){
      for(let j = 0; j < n; j++){
        if(j ==0 || j ==n-1){
          sum += matrix[j][i]
        }
      }
    }
    
    for(let i = 1; i < n-1; i++){
       for(let j = 1; j < n-1; j++){
         if(i ==j || i+j ==n-1){
           sum += matrix[i][j]
         }
       }
    }
    
    
  console.log(sum)

}
