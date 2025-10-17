
function removeDuplicates(str){
    let stack = [];
    
    let n = str.length;
    for(let i = 0; i < n; i++){
      
      if(stack.length > 0 && stack[stack.length -1] === str[i]){
        
        stack.pop();
      }else {
        stack.push(str[i])
      }
    } 
    for(let i = 0; i < stack.length; i++){
        process.stdout.write(stack[i])
    }
    console.log()
  }
  
  let str = 'abbaca';
  let n = 6
  removeDuplicates(str)