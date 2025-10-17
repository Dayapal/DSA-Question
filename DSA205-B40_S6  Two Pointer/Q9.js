


function countSuchPairs(N, K, A) {
    let map = {};  // Create an empty object to store frequencies of numbers
    let count = 0; // This will store the final number of valid pairs

    // Traverse through the array
    for (let i = 0; i < N; i++) {
        let complement = K - A[i];  // Find the complement of the current number
        
        // If the complement exists in the map, add its frequency to the count
        if (map[complement]) {
            count += map[complement];
        }

        // Add the current number to the map or increase its frequency
        if (map[A[i]]) {
            map[A[i]]++;
        } else {
            map[A[i]] = 1;
        }
    }

    console.log(count);  // Print the final count
}
