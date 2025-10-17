
function isValidParentheses(s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
           
            stack.push(s[i]);
        } else {
           
            if (s[i] === ')' && stack[stack.length - 1] === '(') {
                stack.pop(); 
            } else if (s[i] === '}' && stack[stack.length - 1] === '{') {
                stack.pop();  
            } else if (s[i] === ']' && stack[stack.length - 1] === '[') {
                stack.pop();  
            } else {
                console.log("not balanced")
                return
            }
        }
    }

  
    // return stack.length === 0;
    if(stack.length ===0){
      console.log("balanced")
    }else{
      console.log("not balanced")
    }
}

// -----------------------------------------------------------------------------------