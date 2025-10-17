

// function firstNegativeInWindow(arr, N, K) {
//     let result = [];  // To store the result
//     let queue = [];   // To store the indices of negative numbers

//     // Process the first window of size K
//     for (let i = 0; i < K; i++) {
//         if (arr[i] < 0) {
//             queue.push(i);  // Store index of negative numbers
//         }
//     }

//     // For each window starting from index 0 to N-K
//     for (let i = 0; i <= N - K; i++) {
//         // If the queue is not empty, the first element is the first negative
//         if (queue.length > 0 && queue[0] >= i) {
//             result.push(arr[queue[0]]);
//         } else {
//             result.push(0);  // No negative number in this window
//         }

//         // Slide the window: Remove elements out of the current window
//         if (queue.length > 0 && queue[0] < i + 1) {
//             queue.shift();  // Remove the index from the front of the queue
//         }

//         // Add the next element (arr[i + K]) to the window
//         if (i + K < N && arr[i + K] < 0) {
//             queue.push(i + K);
//         }
//     }

//     return result;
// }

// // Example Usage
// let arr = [-8, 2, 3, -6, 10];
// let N = arr.length;
// let K = 2;
// console.log(firstNegativeInWindow(arr, N, K));  // Output: [-8, 0, -6, -6]




function firstNegativeInWindow(arr, N, K) {
    let result = [];  
    let queue = []; 
  
    for (let i = 0; i < K; i++) {
        if (arr[i] < 0) {
            queue.push(i)
        }
    }

  
    for (let i = 0; i <= N - K; i++) {
      
        if (queue.length > 0 && queue[0] >= i) {
            result.push(arr[queue[0]]);
        } else {
            result.push(0); 
        }

   
        if (queue.length > 0 && queue[0] < i + 1) {
            queue.shift(); 
        }

       
        if (i + K < N && arr[i + K] < 0) {
            queue.push(i + K);
        }
    }

    for(let i = 0; i < result.length; i++){
        process.stdout.write(result[i] + " ")
    }
    console.log()
}

// Example Usage
let arr = [-8, 2, 3, -6, 10];
let N = arr.length;
let K = 2;
console.log(firstNegativeInWindow(arr, N, K));  // Output: [-8, 0, -6, -6]
