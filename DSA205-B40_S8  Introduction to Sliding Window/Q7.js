// Function to check if there is a subarray with sum K
function findSubarrayWithSumK(arr, n, k) {
  
    let currentSum = 0;
       let start = 0; 
       for (let end = 0; end < n; end++) {
           currentSum += arr[end];
   
          
           while (currentSum > k && start <= end) {
               currentSum -= arr[start];
               start++;
           }
   
         
           if (currentSum === k) {
               console.log("Yes");
               return;
           }
       }
   
      
       console.log("No")
    }