// const array = [
//     ['rancho', 45],
//     ['chatur', 32],
//     ['raju', 30],
//     ['farhan', 28],
//     ['virus', 32],
//     ['joy', 45]
//   ];
  
//   // Step 1: Sort the array by score (descending) and name (ascending)
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length - i - 1; j++) {
//       if (array[j][1] < array[j + 1][1] || 
//          (array[j][1] === array[j + 1][1] && array[j][0] > array[j + 1][0])) {
//         // Swap if the current score is less than the next score 
//         // or if the scores are the same but the current name is greater
//         const temp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = temp;
//       }
//     }
//   }
  
//   // Step 2: Assign ranks, handling ties
//   let rank = 1; // Starting rank
//   for (let i = 0; i < array.length; i++) {
//     if (i > 0 && array[i][1] === array[i - 1][1]) {
//       // If the score is the same as the previous one, keep the same rank
//       console.log(`${rank} ${array[i][0]}`);
//     } else {
//       // Otherwise, update the rank
//       rank = i + 1; // Rank starts from 1
//       console.log(`${rank} ${array[i][0]}`);
//     }
//   }
  



const array = [
    ['rancho', 45],
    ['chatur', 32],
    ['raju', 30],
    ['farhan', 28],
    ['virus', 32],
    ['joy', 45]
  ];
  

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j][1] < array[j + 1][1] || 
         (array[j][1] === array[j + 1][1] && array[j][0] > array[j + 1][0])) {
   
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  
  let rank = 1; 
  for (let i = 0; i < array.length; i++) {
    if (i > 0 && array[i][1] === array[i - 1][1]) {
     
      console.log(`${rank} ${array[i][0]}`);
    } else {
      rank = i + 1; 
      console.log(`${rank} ${array[i][0]}`);
    }
  }
  