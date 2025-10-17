

function powerOfString(n,str){
    //write your code here
    let countVowels = 0
    let count2 = 0
    for(let i = 0; i < str.length; i++){
      if(str[i] ==='a' || str[i] ==='e' || str[i] === 'i' || str[i] === "o" || str[i] === 'u'){
         countVowels+= 1
      }
      else{
        count2 += 1
      }
    }
    let ans = 3 * countVowels + 5 * count2
    console.log(ans)
    
    
}    