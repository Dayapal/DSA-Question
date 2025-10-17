

function walkInPark(r,c,mat){
    let i = 0
    let j = 0
    let count = 0
    while( i < r && j < c && i >=0 && j >=0){
        if(mat[i][j] ==="visited"){
            console.log(count)
            return;
        }
        else if( mat[i][j]==="R"){
            mat[i][j] = "visited"
            j++
            count++
        }else if(mat[i][j] ==="U"){
            mat[i][j] = "visited"
            i--
            count++
        }else if(mat[i][j] === "L"){
            mat[i][j] = "visited";
            j--
            count++
        }else if(mat[i][j] ==="D"){
            mat[i][j] = "visited";
            i++
            count++
        }
    } 
    console.log(count)
    return
}

const grid = [
    ['R', 'R', 'D', 'R'],
    ['L', 'L', 'U', 'D'],
    ['L', 'L', 'L', 'L']
];

let r = 3;
let c = 4;

walkInPark(r,c,grid)


// function walkInPark(r, c, mat) {
//     let i = 0;
//     let j = 0;
//     let count = 0;
//     while (i >= 0 && i < r && j >= 0 && j < c) {
//         if (mat[i][j] === "visited") { // Use === for comparison
//             console.log(count);
//             return;
        
//         }
//         const direction = mat[i][j]
//         mat[i][j] = "visited";
//         count++

//         if (direction === "R") {
//             j++;
            
//         } else if (direction === "U") {

//             i--;
        
//         } else if (direction === "L") {

//             j--;

//         } else if (direction === "D") {

//             i++;
//         }
//     }
//     console.log(count);
    
// }

// const grid = [
//     ['R', 'R', 'D', 'R'],
//     ['L', 'L', 'U', 'D'],
//     ['L', 'L', 'L', 'L']
// ];

// let r = 3;
// let c = 4;

// walkInPark(r, c, grid);
