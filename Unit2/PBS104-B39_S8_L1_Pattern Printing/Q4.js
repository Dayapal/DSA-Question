function strangePattern(N,M){
  //write your code here
  for(let i=0; i<N*2; i++){
    let bag = ''
    if(i%2 ==0){
      for(let j =0; j<M; j++){
        bag += "/\\"
      }                                  // this is for the even postion
      console.log("+" + bag + "+")
    }
    
    else{
    for(let j=0; j<M; j++){
       bag += '\\/'
    }
    console.log("+" + bag + "+")
  }
  }
}
let ans = strangePattern(1,1)
console.log(ans)
/*

+/\/\/\/\+
+\/\/\/\/+
+/\/\/\/\+
+\/\/\/\/+
+/\/\/\/\+
+\/\/\/\/+

*/

















function spiralTraversal(N, M, arr){
  //write code here
let cl = 0, cr = M - 1;
let rt = 0, rb = N - 1;
let count = 0; 
let bag = '';
while (count < N * M) {
  for (let i = rb; i >= rt && count < N * M; i--) {
      bag += arr[i][cl] + " ";
      count++;
  }
  cl++; 
  
  for (let i = cl; i <= cr && count < N * M; i++) {
      bag += arr[rt][i] + " ";
      count++;
  }
  rt++; 
  for (let i = rt; i <= rb && count < N * M; i++) {
      bag += arr[i][cr] + " ";
      count++;
  }
  cr--; 
  for (let i = cr; i >= cl && count < N * M; i--) {
      bag += arr[rb][i] + " ";
      count++;
  }
  rb--;
}

console.log(bag);
  

}
