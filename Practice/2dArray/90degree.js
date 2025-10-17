


// function rotateMatrix90(matrix) {
//     // Step 1: Transpose the matrix
//     let n = matrix.length;
//     for (let i = 0; i < n; i++) {
//         for (let j = i; j < n; j++) {
//             // Swap elements
//             [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
//         }
//     }

//     // Step 2: Reverse each row
//     for (let i = 0; i < n; i++) {
//         matrix[i].reverse();
//     }

//     return matrix;
// }

// Example Usage:
// let originalMatrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// let n = originalMatrix.length;
// for(let i = 0; i < n; i++){
//     originalMatrix[i].reverse()
// }
// // console.log(originalMatrix)
// let rotatedMatrix = rotateMatrix90(originalMatrix);
// console.log(rotatedMatrix);
// -----------------------------------------------------------------------------------------


let str = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
    [16,17,18,19,20],
    [21,22,23,24,25]
]

// let str = [
//     [1,2,3,4],
//     [5,6,7,8],
//     [1,2,3,4],
//     [5,6,7,8]
// ]

for(let i = 0; i < str.length; i++){
    for(let j = i +1; j < str.length; j++){
        [str[i][j], str[j][i]] = [str[j][i] , str[i][j]]
    }
}
// console.log(str)

let left = 0
let right = str.length-1

while(left < right){
    let temp = str[left]
    str[left] = str[right]
    str[right] = temp;
    left++
    right--
}

console.log(str)