

// let arr = [-1, -1, -2, 1, -1, 4, 1, 9, 3, 9]
// let k = 3;
// let result = -Infinity
// for (let i = 0; i < arr.length; i++) {
//     let sum = 0

//     for (let j = i; j < i + k; j++) {
//         sum += arr[j];
//         }
//        if(sum > result){
//         result = sum
//        }
//     }

//     console.log(result)
    // -----------------------------------------------------------


    let arr = [-1, -1, -2, 1, -1, 4, 1, 9, 3, 9];
let k = 3;
let result = -Infinity;
let sum = 0;

// Calculate the sum of the first window of size k
for (let i = 0; i < k; i++) {
    sum += arr[i];
}
result = sum; // Initialize the result with the first window's sum

// Slide the window over the array
for (let i = k; i < arr.length; i++) {
    sum = sum - arr[i - k] + arr[i];  // Adjust the sum by removing the element going out and adding the new element
    result = Math.max(result, sum);   // Update result if the new sum is larger
}

console.log("Maximum sum of subarray of size", k, "is:", result);