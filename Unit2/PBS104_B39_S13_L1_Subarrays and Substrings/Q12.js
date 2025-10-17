
function checkPalindrome(str){

  let left = 0
  let right = str.length-1
  while(left <= right){
    if(str[left] !== str[right]){
      return false
    }
    left++
    right--
   
  }
  return true
}

// let ans = 'amae'
// console.log(checkPalindrome(ans))

let str  = "thisracecarisgood"
let result = 0
for(let i = 0; i < str.length; i++){
  for(let j = i; j < str.length; j++){
    let bag = "";
    for(let k = i; k <= j; k++){
      bag += str[k]
    }
     if(checkPalindrome(bag)){
      if(bag.length > result){
        result = bag.length
      }
     }
  }
}
console.log(result)