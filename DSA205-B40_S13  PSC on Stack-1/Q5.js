// function findSumArray(A) {
//     const n = A.length;
//     const result = [];

//     for (let i = 0; i < n; i++) {
//         let x = -1; // initialize x as -1
//         let y = -1; // initialize y as -1

//         // Find x: the largest index less than i where A[x] > A[i]
//         for (let j = i - 1; j >= 0; j--) {
//             if (A[j] > A[i]) {
//                 x = j;
//                 break; // stop once we find the closest larger element on the left
//             }
//         }

//         // Find y: the smallest index greater than i where A[y] > A[i]
//         for (let k = i + 1; k < n; k++) {
//             if (A[k] > A[i]) {
//                 y = k;
//                 break; // stop once we find the closest larger element on the right
//             }
//         }

//         // Add x + y to the result array
//         result.push(x + y);
//     }

//     return result;
// }

// // Example usage
// const A = [5, 4, 1, 3, 2];
// console.log(findSumArray(A)); // Output should be: [-2, 0, 6, 1, 3]



function findSumArray(arr, n) {
    const leftGreater = new Array(n).fill(-1);  // Stores x values
    const rightGreater = new Array(n).fill(-1); // Stores y values
    const result = new Array(n);
    let stack = [];
  
    // Find Left Greater Element (x) for each index
    for (let i = 0; i < n; i++) {
      while (stack.length > 0 && arr[stack[stack.length - 1]] <= arr[i]) {
        stack.pop();
      }
      if (stack.length > 0) {
        leftGreater[i] = stack[stack.length - 1];
      }
      stack.push(i);
    }
  
    // Clear stack for the next calculation
    stack = [];
  
    // Find Right Greater Element (y) for each index
    for (let i = n - 1; i >= 0; i--) {
      while (stack.length > 0 && arr[stack[stack.length - 1]] <= arr[i]) {
        stack.pop();
      }
      if (stack.length > 0) {
        rightGreater[i] = stack[stack.length - 1];
      }
      stack.push(i);
    }
  
    // Calculate the result based on leftGreater and rightGreater arrays
    for (let i = 0; i < n; i++) {
      result[i] = leftGreater[i] + rightGreater[i];
    }
  
    return result;
  }
  
  // Example usage
  const arr = [5, 4, 1, 3, 2];
  const n = arr.length;
  console.log(findSumArray(arr, n)); // Expected output: [-2, 0, 6, 1, 3]
  