

// function digitSum(num){

//     let sum = 0;
//     while(num > 0){
//         sum += num%10
//         num = Math.floor(num/10);
//     }
//     return sum;
// }


// function bubbleSortDigitSum(arr,n){

//     for(let i = 0; i < n; i++){
//         for(let j = 0;  j < n-i-1; j++){
//             let sumA = digitSum(arr[j])
//             let sumB = digitSum(arr[j+1])

//             if(sumA > sumB || (sumA === sumB && arr[j] > arr[j+1])){

//                 let temp = arr[j]
//                 arr[j]  = arr[j+1]
//                 arr[j+1]  = temp
//             }
//         }
//     }
//     console.log(arr)
    
// }



// let arr = [1,2,10,4,11];
// let n = 5
// bubbleSortDigitSum(arr,n)


// -----Selection  sorting-----------------------


// function digitalSum(num) {
//     let sum = 0;
//     while (num > 0) {
//       sum += num % 10;
//       num = Math.floor(num / 10);
//     }
//     return sum;
//   }
  
//   function sortDigitalSum(arr, n) {
//     for (let i = 0; i < n - 1; i++) {
   
//       let minIndex = i;
  
     
//       for (let j = i + 1; j < n; j++) {
//         let sumMin = digitalSum(arr[minIndex]);
//         let sumCurrent = digitalSum(arr[j]);
  
        
//         if (sumCurrent < sumMin || (sumCurrent === sumMin && arr[j] < arr[minIndex])) {
//           minIndex = j;
//         }
//       }
  
     
//       if (minIndex !== i) {
//         let temp = arr[i];
//         arr[i] = arr[minIndex];
//         arr[minIndex] = temp;
//       }
//     }
  
   
//     for (let i = 0; i < n; i++) {
//       process.stdout.write(arr[i] + " ");
//     }
//     console.log();
//   }

//   const arr = [56, 34, 12, 90, 23];
//   const n = arr.length;
//   sortDigitalSum(arr, n);





// -----Merge sort-----------------------

function digitalSum(num) {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return sum;
  }
  
  function merge(arr, left, mid, right) {
    let n1 = mid - left + 1;
    let n2 = right - mid;
  
 
    let L = [];
    let R = [];

    for (let i = 0; i < n1; i++) {
      L.push(arr[left + i]);
    }
    for (let j = 0; j < n2; j++) {
      R.push(arr[mid + 1 + j]);
    }
  
    let i = 0, j = 0, k = left;
  
    while (i < n1 && j < n2) {
      let sumL = digitalSum(L[i]);
      let sumR = digitalSum(R[j]);
  
      if (sumL < sumR || (sumL === sumR && L[i] <= R[j])) {
        arr[k] = L[i];
        i++;
      } else {
        arr[k] = R[j];
        j++;
      }
      k++;
    }
  
   
    while (i < n1) {
      arr[k] = L[i];
      i++;
      k++;
    }
  
    while (j < n2) {
      arr[k] = R[j];
      j++;
      k++;
    }
  }
  
  function mergeSort(arr, left, right) {
    if (left < right) {
      let mid = Math.floor((left + right) / 2);
  
      mergeSort(arr, left, mid);
      mergeSort(arr, mid + 1, right);
      
      merge(arr, left, mid, right);
    }
  }
  
  // Example usage
  const arr = [56, 34, 12, 90, 23];
  const n = arr.length;
  
  mergeSort(arr, 0, n - 1);
  
  // Print the sorted array
  for (let i = 0; i < n; i++) {
    process.stdout.write(arr[i] + " ");
  }
  console.log();
  