


query = [
    [1],     
    [2, 5],   
    [2, 7],   
    [2, 9], 
    [1],      
    [1]     
  ];
  
  
  let stack = [];
  let n = 6;
  
  for(let i = 0; i < query.length; i++){
    
    if (query [i][0] ===1) {
      
      if( stack.length === 0 ){
      
        console.log("No Food")
        
      }else{
        
        console.log(stack[stack.length-1])
        stack.pop();
        
      }
    }
    else if(query[i][0] ===2) 
    {
      let num = query[i][1]
      stack.push(num)
    }
  }
//   console.log(stack)