

function spiralTraversalV(N, matrix){
    //write code here
    let l = 0;
    let r = N-1;
    let t = 0;
    let b = N-1;
    let count = 0
    let bag = ''
    while( count < N*N){
      
      for(let i = t; i <= b && count < N*N; i++){
        bag += matrix[i][r] + " ";
        count++
      }
      r--
      
      for(let i = r; i >= l && count < N*N; i--){
        bag += matrix[b][i] + " ";
        count++
      }
      b--
      
      for(let i = b; i >= t && count < N*N; i--){
        bag += matrix[i][l] + " ";
        count++
      }
      l++
      
      for(let i = l; i <= r && count < N*N; i++){
        bag += matrix[t][i] + " ";
        count++
      }
      t++
      
      
      
    }
    console.log(bag)
  
}
