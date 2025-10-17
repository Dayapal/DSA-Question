

function rotateBy90(R, matrix) {
    for (let i = 0; i < R; i++) {
        for (let j = i + 1; j < R; j++) {
            let temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp

        }
    }
    let left = 0;
    let right = R - 1
    while (left < right) {
        let temp = matrix[left]
        matrix[left] = matrix[right]
        matrix[right] = temp

        left++
        right--
    }

    for (let i = 0; i < R; i++) {
        let bag = ''
        for (let j = 0; j < R; j++) {

            bag += matrix[i][j] + " ";
        }
        console.log(bag)
    }
}


let R = 3
let mat = [
    [1,2,3],
    [4,5,7],
    [8,9,10]
]                           //3 7 10  2 5 9  1 4 8


rotateBy90(R,mat)

// -----------------------------------
// input 
// 4
// 1 2 3 4
// 5 6 7 8
// 1 2 3 4
// 5 6 7 8

// output

// 4 8 4 8
// 3 7 3 7
// 2 6 2 6
// 1 5 1 5

let arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [1, 2, 3, 4],
    [5, 6, 7, 8]

]

let n = arr.length;

for(let i = 0; i < n; i++){
    for(let j = i+1; j < n; j++){
        let temp = arr[i][j]
        arr[i][j] = arr[j][i]
        arr[j][i] = temp
    }
}

console.log(arr)
