// function findNextSmallerOfNextGreater(arr) {
//     const n = arr.length; // Get the length of the input array
//     let result = []; // Initialize the result array
//     let nextGreater = []; // Array to store the Next Greater Element (NGE)
//     let nextSmaller = []; // Array to store the Next Smaller Element (NSE) of each NGE

//     // Step 1: Find the Next Greater Element for each element
//     let stack = []; // Stack to help find the NGE
//     for (let i = 0; i < n; i++) {
//         // While the stack is not empty and the current element is greater than the element at the index stored at the top of the stack
//         while (stack.length > 0 && arr[stack[stack.length - 1]] < arr[i]) {
//             // Pop the index from the stack and set the NGE for that index
//             let index = stack.pop(); // Get the index
//             nextGreater[index] = i; // Store the index of the next greater element
//         }
//         stack.push(i); // Push the current index onto the stack
//     }

//     // Step 2: For each NGE found, find the Next Smaller Element
//     for (let i = 0; i < n; i++) {
//         if (nextGreater[i] !== undefined) { // Check if a NGE exists
//             let ngeIndex = nextGreater[i]; // Get the index of the NGE
//             // Look for the next smaller element after the NGE
//             for (let j = ngeIndex + 1; j < n; j++) {
//                 if (arr[j] < arr[ngeIndex]) { // If we found a smaller element
//                     nextSmaller[ngeIndex] = arr[j]; // Store it in the nextSmaller array
//                     break; // Stop looking after finding the first smaller element
//                 }
//             }
//             // If nextSmaller[ngeIndex] is undefined, it means there is no smaller element found
//             result[i] = nextSmaller[ngeIndex] !== undefined ? nextSmaller[ngeIndex] : -1; // Set the result for the current index
//         } else {
//             result[i] = -1; // If no NGE exists, set result to -1
//         }
//     }

//     return result; // Return the result array
// }

// // Input
// const arr = [5, 1, 6, 2, 5, 1];
// console.log(findNextSmallerOfNextGreater(arr)); // Expected output: [2, 2, -1, 1, -1, -1]


function findNextSmallerOfNextGreater(arr) {
    const n = arr.length
    let result = []; 
    let nextGreater = []; 
    let nextSmaller = []; 

    let stack = [];
    for (let i = 0; i < n; i++) {
      
        while (stack.length > 0 && arr[stack[stack.length - 1]] < arr[i]) {
           
            let index = stack.pop(); 
            nextGreater[index] = i
        }
        stack.push(i); 
    }

    for (let i = 0; i < n; i++) {
        if (nextGreater[i] !== undefined) {
            let ngeIndex = nextGreater[i]; 
          
            for (let j = ngeIndex + 1; j < n; j++) {
                if (arr[j] < arr[ngeIndex]) { 
                    nextSmaller[ngeIndex] = arr[j];
                    break
                }
            }
           
            result[i] = nextSmaller[ngeIndex] !== undefined ? nextSmaller[ngeIndex] : -1
        } else {
            result[i] = -1;
        }
    }

    return result;
}

