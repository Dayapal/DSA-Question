
let arr = [39 ,27 ,11, 4, 24 ,32 ,32 ,1 ];

// let stack =  [];
// let result = [];

// for(let i = 0; i < arr.length; i++){
//     while(stack.length > 0 && stack[stack.length -1] >= arr[i]){
//         stack.pop();
//     }
//     if(stack.length ===0){
//         result.push(-1)
//     }else{
//         result.push(stack[stack.length-1]);
//     }
//    stack.push(arr[i])
// }

// console.log(result)

function smallerLeftElement(arr){
    let  stack = [];
    let  result = [];
    for(let i = 0; i < arr.length; i++){
      
      while(stack.length > 0 && stack[stack.length -1] >= arr[i]){
        stack.pop();
      }
      
      if(stack.length ===0){
        result.push(-1)
      }else{
        result.push(stack[stack.length -1]);
      }
      stack.push(arr[i])
    }
    
    // console.log(result)
    for(let i = 0; i < result.length; i++){
      process.stdout.write(result[i] + " ")
    }
    console.log()
    
  }
  

  smallerLeftElement(arr)