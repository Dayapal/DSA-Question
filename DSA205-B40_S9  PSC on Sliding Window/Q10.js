
// let k = 3
// let str = 'abcdeefgert';
// let count = 0

// for(let i = 0; i < str.length; i++){
//     let sub = ""
//     for(let j = i; j < str.length; j++){
//         sub += str[j];
//         if(sub.length === k){
//           let isUniqe = true;

//           for(let k = 0; k < sub.length-1; k++){
//             if(sub[k] === sub[k+1]){
//                 isUniqe = false;
//                 break
//             }
//           }
//           if(isUniqe){
//             count += 1
//           }
//         }
       
//     }
      
// }
// console.log(count)


// function subStringKDistrinct(arr,k){
//     let count = 0
//     for(let i = 0; i < arr.length; i++){
//       let sub = ""
      
//       for(let j = i; j < arr.length; j++){
//         sub += arr[j]
//         if(sub.length ===k){
//           let isUnique = true;
          
//           for(let k = 0; k < sub.length - 1; k++){
//             if(sub[k] === sub[k+1]){
//               isUnique = false;
//               break
//             }
//           }
//           if(isUnique){
//             count += 1
//           }
//         }
//       }
//     }
    
//     console.log(count)
    
//   }
  
//   subStringKDistrinct(str,k)
// --------------------------------------------------------------------- this one is brute force approach -----------------


// function subStringKDistinct(arr, k) {
//     let count = 0;   // To store the total number of valid substrings
//     let left = 0;    // Left pointer of the sliding window

//     // Iterate with the right pointer
//     for (let right = 0; right < arr.length; right++) {
//         // If the window size becomes 'k'
//         if (right - left + 1 === k) {
//             let isUnique = true;  // Flag to check for consecutive duplicates

//             // Check for consecutive duplicates within the current window
//             for (let i = left; i < right; i++) {
//                 if (arr[i] === arr[i + 1]) {
//                     isUnique = false;
//                     break;
//                 }
//             }

//             // If no consecutive duplicates, increase the count
//             if (isUnique) {
//                 count++;
//             }

//             // Slide the window by moving the left pointer forward
//             left++;
//         }
//     }

//     console.log(count);
// }
// let n  = 11
// let l = 3
// let strd = aabcdabbcdc


// --------------------------------------------------------------------- this one is brute force approach -----------------


function countKDistinctSubstrings(str, k) {
    let count = 0;
    let charCount = {}; // Object to store character frequencies
    let distinct = 0;   // Track distinct characters
    let left = 0;       // Left pointer for the sliding window
  
    for (let right = 0; right < str.length; right++) {
      // Add the character at the right end of the window
      let rightChar = str[right];
      if (!charCount[rightChar]) {
        charCount[rightChar] = 0;
        distinct++; // New distinct character
      }
      charCount[rightChar]++;
  
      // If the window size exceeds 'k', shrink it from the left
      while (right - left + 1 > k) {
        let leftChar = str[left];
        charCount[leftChar]--;
  
        if (charCount[leftChar] === 0) {
          delete charCount[leftChar];
          distinct--; // Removed a distinct character
        }
        left++;
      }
  
      // Check if the current window has exactly 'k' distinct characters
      if (right - left + 1 === k && distinct === k) {
        count++;
      }
    }
  
    return count;
  }
  
  // Example Usage:
  let str = "abcabc";
  let k = 3;
  console.log(countKDistinctSubstrings(str, k)); // Output: 4
  