
let str = "loveleetcode"
// here we need to find first non repeating char and we need to return the index of that value 
function findNonReaptingCharIndex(s){
    let map = {}
    for(let i = 0; i < s.length; i++){
        if(map[s[i]] === undefined){
            map[s[i]] = 1
        }else{
            map[s[i]]++
        }
    }
    for(let i = 0; i < s.length; i++){
        if(map[s[i]] ===1){
            console.log(i)
            return i
        }
    }
    console.log(-1)
    return 
}
findNonReaptingCharIndex(str)
console.log("hhl")

let str2 = 'aabb'
findNonReaptingCharIndex(str2)