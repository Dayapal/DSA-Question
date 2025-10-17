

let arr = [
  
    [1,2,3,4],
    [1,2,3,4],
    [1,2,3,4],
    [1,2,3,4]
    ]
    
  for(let i = 0; i < arr.length; i++){
    let bag = ""
    for(let j = arr.length-1; j >=0; j--){
      bag += arr[j][i]+ ' ';
    }
    console.log(bag)
  }
  