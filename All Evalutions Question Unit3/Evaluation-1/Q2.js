
let arr = [[1,0],[0,1],[1,1]]
let n = 3
let m = 2
for(let i = 0; i < n; i++){
    let bag = ''
    for(let j = 0; j < m; j++){
        if(arr[i][j] === 1){
            bag += '0' + " ";
        }else if(arr[i][j] === 0){
            bag += '1' + " "
        }
    }
    console.log(bag)
}

// 0 1
// 1 0
// 0 0