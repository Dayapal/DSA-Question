


// // Online Javascript Editor for free
// // Write, Edit and Run your Javascript code using JS Online Compiler
// // output = 25,19,13,7,1,2,3,4,5,6,12,18,24,30,29,28,27,25,20,14, 8,9,10,11,17,23,22,21,15,16
// let N = 5;  
// let M = 6;
// let arr = [
//     [1,2,3,4,5,6],
//     [7,8,9,10,11,12],
//     [13,14,15,16,17,18],
//     [19,20,21,22,23,24],
//     [25,26,27,28,29,30]
// ];

// let cl = 0, cr = M - 1;
// let rt = 0, rb = N - 1;
// let count = 0; 
// let bag = '';

// while (count < N * M) {
//     // Traverse bottom to top along left column
//     for (let i = rb; i >= rt && count < N * M; i--) {
//         bag += arr[i][cl] + " ";
//         count++;
//     }
//     cl++; // Move to the next column

//     // Traverse left to right along top row
//     for (let i = cl; i <= cr && count < N * M; i++) {
//         bag += arr[rt][i] + " ";
//         count++;
//     }
//     rt++; // Move to the next row

//     // Traverse top to bottom along right column
//     for (let i = rt; i <= rb && count < N * M; i++) {
//         bag += arr[i][cr] + " ";
//         count++;
//     }
//     cr--; // Move to the previous column

//     // Traverse right to left along bottom row
//     for (let i = cr; i >= cl && count < N * M; i--) {
//         bag += arr[rb][i] + " ";
//         count++;
//     }
//     rb--; // Move to the previous row
// }

// console.log(bag);





let N = 5;  
let M = 6;
let arr = [
    [1,2,3,4,5,6],
    [7,8,9,10,11,12],
    [13,14,15,16,17,18],
    [19,20,21,22,23,24],
    [25,26,27,28,29,30]
];

let cl = 0, cr = M - 1;
let rt = 0, rb = N - 1;
let count = 0; 
let bag = '';

while (count < N * M) {
    for (let i = rb; i >= rt && count < N * M; i--) {
        bag += arr[i][cl] + " ";
        count++;
    }
    cl++; 

    for (let i = cl; i <= cr && count < N * M; i++) {
        bag += arr[rt][i] + " ";
        count++;
    }
    rt++; 

    for (let i = rt; i <= rb && count < N * M; i++) {
        bag += arr[i][cr] + " ";
        count++;
    }
    cr--; 

    for (let i = cr; i >= cl && count < N * M; i--) {
        bag += arr[rb][i] + " ";
        count++;
    }
    rb--; 
}
console.log(bag);
