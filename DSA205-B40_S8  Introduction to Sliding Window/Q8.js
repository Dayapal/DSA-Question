

function maxFamilies(incomes, k){
  
    incomes.sort((a,b) => a-b);
    
    let mxCount  = 0
    let start  = 0
    for(let i = 0; i < incomes.length; i++){
      
      while(incomes[i] - incomes[start] > k){
        start++
      }
      mxCount = Math.max(mxCount, i-start+1)
    }
    console.log(mxCount)
  }
  
  