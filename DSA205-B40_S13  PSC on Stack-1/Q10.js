

function validateStack(arr1,arr2){
    let stack = [];
    let j = 0;

    for(let num of arr1){
        stack.push(num)


        while(stack.length > 0 && stack[stack.length -1] === arr2[j]){
            stack.pop();
            j++
        }
    }
   let  ans =  j === arr2.length ? "Yes" : "NO";
   console.log(ans)
}