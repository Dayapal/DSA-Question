function ticTacToe(matrix){
    //write code here
   const N = matrix.length; 
    

    for (let i = 0; i < N; i++) {
       
        if (matrix[i][0] === matrix[i][1] && matrix[i][1] === matrix[i][2] && matrix[i][0] !== "") {
            console.log(matrix[i][0]);
            return; 
        }
     
        if (matrix[0][i] === matrix[1][i] && matrix[1][i] === matrix[2][i] && matrix[0][i] !== "") {
            console.log(matrix[0][i]); 
            return; 
        }
    }
    
    if (matrix[0][0] === matrix[1][1] && matrix[1][1] === matrix[2][2] && matrix[0][0] !== "") {
        console.log(matrix[0][0]); 
        return; 
    }
    if (matrix[0][2] === matrix[1][1] && matrix[1][1] === matrix[2][0] && matrix[0][2] !== "") {
        console.log(matrix[0][2]);
        return; 
    }
    if (isTie) {
        console.log("It's a tie!");
    }
  
}
