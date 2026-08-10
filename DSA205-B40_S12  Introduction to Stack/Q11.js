

function isValidParentheses(s) {
    let stack = []; 
    for (let char of s) { 
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } 
        else if (char === ')' || char === '}' || char === ']') {
            if (stack.length === 0){
                console.log("unbalanced")
                return
            };
            let top = stack[stack.length - 1];  
            if (
                (char === ')' && top === '(') ||
                (char === '}' && top === '{') ||
                (char === ']' && top === '[')
            ) {
              
                stack.pop();
            } 
            else {
               
                console.log("unbalanced")
                return;
            }
        }
       
    }


     if(stack.length === 0){
        console.log("balanced")
     }else{
        console.log("unbalanced")
     }
}
let str = "(((()))a)"
isValidParentheses(str)
