// function hasSubarrayWithSumK(N, K, array) {
//     let currentSum = 0;
//     const sumMap = new Map(); // To store cumulative sums

//     for (let i = 0; i < N; i++) {
//         currentSum += array[i]; // Update the cumulative sum

//         // Check if the current sum equals K
//         if (currentSum === K) {
//             console.log("yes");
//             return;
//         }

//         // Check if there exists a subarray with sum K
//         if (sumMap.has(currentSum - K)) {
//             console.log("yes");
//             return;
//         }

//         // Store the current sum in the map
//         sumMap.set(currentSum, i);
//     }

//     // If no such subarray exists
//     console.log("no");
// }


// ----------------------------------------------------------------------------

function hasSubarrayWithSumK(N, K, array) {
    let currentSum = 0;
    const sumMap = new Map();

    for (let i = 0; i < N; i++) {
        currentSum += array[i];

      
        if (currentSum === K) {
            console.log("yes");
            return;
        }

        
        if (sumMap.has(currentSum - K)) {
            console.log("yes");
            return;
        }

    
        sumMap.set(currentSum, i);
    }
    console.log("no");
}
// -------------------------------------------------------------------------
// Function to check if there is a subarray with sum K

   



function findSubarrayWithSumK(arr, n, k) {
  
  
    for (let start = 0; start < n; start++) {
        let currentSum = 0; 
        
       
        for (let end = start; end < n; end++) {
            currentSum += arr[end];
            
           
            if (currentSum === k) {
                console.log("Yes");
                return;
            }
        }
    }


    console.log("No");

// write code here
}


// -----------------------------------------------------------------------------------




function hasSubarrayWithSumK(N, K, array) {
    let currentSum = 0;
    let start = 0; 
    for (let end = 0; end < N; end++) {
        currentSum += array[end];

       
        while (currentSum > K && start <= end) {
            currentSum -= array[start];
            start++;
        }

      
        if (currentSum === K) {
            console.log("Yes");
            return;
        }
    }

   
    console.log("No");
}

// Example inputs
const input1 = [5, 3, [1, 2, 1, 3, 4]]; // should output "yes"
const input2 = [4, 5, [1, 2, 1, 3]]; // should output "yes"
const input3 = [5, 10, [1, 2, 3, 4, 5]]; // should output "no"

// Execute the function for each input
hasSubarrayWithSumK(...input1);
hasSubarrayWithSumK(...input2);
hasSubarrayWithSumK(...input3);
