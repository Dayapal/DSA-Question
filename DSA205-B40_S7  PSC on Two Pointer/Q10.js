

// this is the water area question 
function maxArea(n,arr){
    let l = 0
    let r = n-1
    let res = 0
    
    while(l < r){
      let area = Math.min(arr[l], arr[r]) * (r - l)
      res = Math.max(res, area)
      
      if( arr[l] < arr[r]){
        l = l + 1;
      }else{
        r = r  - 1;
      }
    }
    console.log(res)
  }
  
  