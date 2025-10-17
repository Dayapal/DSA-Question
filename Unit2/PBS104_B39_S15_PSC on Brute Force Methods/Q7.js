


// function solve(N, A) {
//     let totalSum = 0;
 
//     for (let i = 0; i < N; i++) {
//         totalSum += A[i];
//     }
    
//     let leftSum = 0; 
//     let found = false;
//     let index = -1

   
//     for (let i = 1; i < N-1; i++) {
     
//         let rightSum = totalSum - leftSum - A[i];

       
//         if (leftSum === rightSum) {
//             index = i
//             found = true; 
//             break; 
//         }
//         leftSum += A[i];
//     }

  
//     if (found) {
//         console.log(index);
//     }else{
//         console.log(-1)
//     }
// }



// function findEquilibriumPosition(A) {
//     let N = A.length; 
//     let totalSum = 0;
//     let leftSum = 0;

   
//     for (let i = 0; i < N; i++) {
//         totalSum += A[i];
//     }

 
//     for (let i = 1; i < N - 1; i++) {
//         leftSum += A[i - 1]; 
//         let rightSum = totalSum - leftSum - A[i]; 
        
     
//         if (leftSum === rightSum) {
//             console.log(i); 
//             return; 
//         }
//     }

//     console.log(-1); 
// }

// // Example Usage
// let testArray1 = [15, 1, 5, 5, 5]; // Test case 1
// let testArray2 = [1, 2, 3]; // Test case 2

// findEquilibriumPosition(testArray1); // Output: 1
// findEquilibriumPosition(testArray2); // Output: -1



function findEquilibrium(arr) {

    let totalSum = 0;
    for (let i = 0; i < arr.length; i++) {
        totalSum += arr[i];
    }

    let leftSum = 0;
    for (let i = 0; i < arr.length; i++) {
      
        let rightSum = totalSum - leftSum - arr[i];

        if (leftSum === rightSum) {
            return i; 
        }
        leftSum += arr[i];
    }
    
    return -1;
}

// Test the function
let arr = [1, 3, 5, 2, 2];
console.log(findEquilibrium(arr)); // Output: 2