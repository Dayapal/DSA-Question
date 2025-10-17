

function solve(N,S,L,R){
  
    let bag = ''
   for(let i = R; i >= L; i--){
     bag += S[i] 
     
   }
   let diff = bag.length;
   
   let slice = S.slice(diff)
   let bag1  = ""
   for(let i = diff; i < S.length; i++){
     bag1 += S[i]
   }
   
   console.log(bag + bag1)
 
 
   
     
 }