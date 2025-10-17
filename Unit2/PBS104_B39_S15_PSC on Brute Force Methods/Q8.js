function subOfSubarray(N, K, arr) {
    // Loop over all possible starting points of the subarray
    for (let i = 0; i < N; i++) {
      let sum = 0;
  
      // Loop to add elements one by one to find the sum of subarrays starting from index 'i'
      for (let j = i; j < N; j++) {
        sum += arr[j];
  
        // If the sum equals K, print "Yes" and return
        if (sum === K) {
          console.log("Yes");
          return;
        }
      }
    }
  
    // If no subarray is found with sum equal to K, print "No"
    console.log("No");
  }
  
  // Function to handle multiple test cases
  function runTests(tests) {
    for (let test of tests) {
      let [N, K, arr] = test;
      subOfSubarray(N, K, arr);
    }
  }
  
  // Example usage
  let tests = [
    [5, 12, [1, 2, 3, 7, 5]],  // Yes
    [5, 15, [1, 2, 3, 4, 5]],  // No
  ];
  runTests(tests);
  