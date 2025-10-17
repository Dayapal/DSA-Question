
function solve(n,arr,q,query){
    //write your code here
    // let flag = false
    for(let i = 0; i < query.length; i++){
      let  flag = false
       for(let j = 0; j < arr.length; j++){
         if(arr[j] === query[i]){
           flag = true
         }
       }
     
     if(flag){
       console.log("YES")
     }else{
       console.log("NO")
     }
    }
}


// YES
// YES
// NO 