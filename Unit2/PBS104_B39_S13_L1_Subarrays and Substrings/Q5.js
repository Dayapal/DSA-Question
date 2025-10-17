


let str = "aman";
let k = "a"
let count = 0
for(let i = 0; i < str.length; i++){
    for(let j = i; j < str.length; j++){
        let bag = '';
        for(let k = i; k <= j; k++){
            bag += str[k]
        }
        if(bag[0] === k){
            count +=1
        }
    }
}
console.log(count)