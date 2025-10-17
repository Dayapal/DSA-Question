

let n = 4

let arr1 = []
let count = 0
for(let i = 0; i < n; i++){
    let mat = [];
    
    for(let j = 0; j < n; j++){
        count+=1
        mat.push(count)
        
    }
    arr1.push(mat)
}

console.log(arr1)