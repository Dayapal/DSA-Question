


// function ticTacToe(matrix) {
//     const N = matrix.length; // Assuming a square matrix (3x3)
    
//     // Check rows and columns
//     for (let i = 0; i < N; i++) {
//         // Check rows
//         if (matrix[i][0] === matrix[i][1] && matrix[i][1] === matrix[i][2] && matrix[i][0] !== "") {
//             console.log(matrix[i][0]); // Print winner
//             return; // Exit the function after finding a winner
//         }
//         // Check columns
//         if (matrix[0][i] === matrix[1][i] && matrix[1][i] === matrix[2][i] && matrix[0][i] !== "") {
//             console.log(matrix[0][i]); // Print winner
//             return; // Exit the function after finding a winner
//         }
//     }

//     // Check diagonals
//     if (matrix[0][0] === matrix[1][1] && matrix[1][1] === matrix[2][2] && matrix[0][0] !== "") {
//         console.log(matrix[0][0]); // Print winner
//         return; // Exit the function after finding a winner
//     }
//     if (matrix[0][2] === matrix[1][1] && matrix[1][1] === matrix[2][0] && matrix[0][2] !== "") {
//         console.log(matrix[0][2]); // Print winner
//         return; // Exit the function after finding a winner
//     }

//     // Check for tie (assuming the board is full)
//     let isTie = true;
//     for (let i = 0; i < N; i++) {
//         for (let j = 0; j < N; j++) {
//             if (matrix[i][j] === "") { // If any cell is empty
//                 isTie = false; // Not a tie
//                 break;
//             }
//         }
//     }

//     if (isTie) {
//         console.log("It's a tie!");
//     }
// }



function ticTacToe(matrix) {
    const N = matrix.length; 
    for (let i = 0; i < N; i++) {
       
        if (matrix[i][0] === matrix[i][1] && matrix[i][1] === matrix[i][2] && matrix[i][0] !== "") {
            console.log(matrix[i][0]);
            return; 
        }
        if (matrix[0][i] === matrix[1][i] && matrix[1][i] === matrix[2][i] && matrix[0][i] !== "") {
            console.log(matrix[0][i]); 
            return; 
        }
    }
    if (matrix[0][0] === matrix[1][1] && matrix[1][1] === matrix[2][2] && matrix[0][0] !== "") {
        console.log(matrix[0][0]); 
        return; 
    }
    if (matrix[0][2] === matrix[1][1] && matrix[1][1] === matrix[2][0] && matrix[0][2] !== "") {
        console.log(matrix[0][2]);
        return; 
    }
    let isTie = true;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (matrix[i][j] === "") { 
                isTie = false; 
                break;
            }
        }
    }
    if (isTie) {
        console.log("It's a tie!");
    }
}