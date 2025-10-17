
// in this question there are two verities

let  n = 3
let mat = [
    [1,2,3],
    [4,5,7],
    [8,9,10]
]
// Output:  8 4 1 2 5 9 10 7 3  this is the wave one question

// output : 3 2 1 4 5 7 8 9 10

for(let i = 0; i < n; i++){
    let bag = ''
    if(i % 2 ==0){
        for(let j = n-1; j >=0; j--){
            bag += mat[j][i] + " "

        }
    }
    else if(i % 2 !==0){
        for(let j = 0; j < n; j++){
            bag += mat[j][i] + " "
        }
    }
    console.log(bag)
}
// --------------------------------------------------
for(let i = 0; i < n; i++){
    let bag = ''
    if(i % 2 ==0){
        for(let j = n-1; j >=0; j--){
            bag += mat[i][j] + " "

        }
    }
    else if(i % 2 !==0){
        for(let j = 0; j < n; j++){
            bag += mat[i][j] + " "
        }
    }
    console.log(bag)
}