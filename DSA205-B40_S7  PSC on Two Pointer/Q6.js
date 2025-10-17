



// function removeDuplicates(arr) {
//     // Check if the array is empty
//     if (arr.length === 0) {
//         return [];
//     }

//     // Initialize the write pointer at the first position
//     let j = 0;

//     // Loop through the array with the read pointer
//     for (let i = 1; i < arr.length; i++) {
//         // Check if the current element is different from the last unique element
//         if (arr[i] !== arr[j]) {
//             // Move the write pointer forward and update the value
//             j++;
//             arr[j] = arr[i];
//         }
//     }

//     // Slice the array to return only the unique elements
//     return arr.slice(0, j + 1);
// }

// // Example usage
// const sortedArray = [1, 1, 3, 3];
// const uniqueElements = removeDuplicates(sortedArray);
// let ans = uniqueElements.join(" ")
// console.log(ans); // Output: [1, 3]





function removeDuplicates(arr) {

    if (arr.length === 0) {
        return [];
    }

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[j]) {
           
            j++;
            arr[j] = arr[i];
        }
    }
    return arr.slice(0, j + 1);
}

const sortedArray = [1, 1, 3, 3];
const uniqueElements = removeDuplicates(sortedArray);
let ans = uniqueElements.join(" ")
console.log(ans);
