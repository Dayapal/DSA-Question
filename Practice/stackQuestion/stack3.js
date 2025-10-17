

let arr = "abbaca"

let stack = []

for(let i = 0; i < arr.length; i++){
    if(stack.length > 0 && stack[stack.length-1] === arr[i]){
        stack.pop()
    }else{
        stack.push(arr[i])
    }
   
}

console.log(stack)