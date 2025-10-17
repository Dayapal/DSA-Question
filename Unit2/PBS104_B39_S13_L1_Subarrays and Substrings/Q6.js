

let str = "abcab"
let count = 0
for(let i = 0; i < str.length; i++){
    for(let j = i; j < str.length; j++){
        let bag = "";
        for(let k = i; k <= j; k++){
            bag += str[k]
        }
        let len = bag.length-1
        if(bag[0] === bag[len]){
            count += 1
        }
    }
}
console.log(count)
// let len = str.length-1
// console.log(str[len])