

function checkForSymmetry(n, matrix) {
    //write code here
    //console n,matrix and check the input response
    let flag1 =true
    let flag2= true
    
    for(let i = 0; i < n; i++){
      
      if(matrix[i] !== matrix[n-1-i]){
        flag1 = false
      }
      for(let j = 0; j < Math.floor(n/2); j++){
        if(matrix[i][j] !== matrix[i][n-1-j]){
          flag2 = false
        }
      }
    }
    
  if(flag1 && flag2){
    console.log("BOTH")
  }else if(flag1){
    console.log("HORIZONTAL")
  }else if(flag2){
    console.log("VERTICAL")
  }else{
    console.log("NO")
  }
}