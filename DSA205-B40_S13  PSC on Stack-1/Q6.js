

function runProgram(input) {
    let stack = []
    for(let i = 0; i < input.length; i++){
      stack.push(input[i])
    }
    
    for(let i = 0; i < input.length; i++){
       let top = stack[stack.length-1]
       if(top === input[i]){
         stack.pop(top)
       }
    }
   
    if(stack.length === 0){
      console.log("YES")
    }else{
      console.log("NO")
    }
      
  }