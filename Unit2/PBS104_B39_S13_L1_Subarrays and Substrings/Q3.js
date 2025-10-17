

let str = 'ufpjzr'
let count = 0
for(let i = 0; i < str.length; i++){
    for(let j = i; j < str.length; j++){
        let bag = '';
        for(let k = i; k <= j; k++){
            bag += str[i]
        }
        if(bag[0] === "a" || bag[0] === "e" || bag[0] === "i" || bag[0] ==="o" || bag[0] === "u"){
            count +=1
        }
    }
}

console.log(count)