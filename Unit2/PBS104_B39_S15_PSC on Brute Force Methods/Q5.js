

let arr = [14, 7, 8, 2, 4];
let sum = 0;
let index = -1;
let minValue = Infinity; // To track the smallest element

// Calculate the total sum of the array
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

// Iterate to find the first index of the smallest removable element
for (let i = 0; i < arr.length; i++) {
    let remSum = sum - arr[i]; // Calculate the remaining sum after removing arr[i]
    
    if (remSum % 7 === 0) { // Check if the remaining sum is divisible by 7
        if (arr[i] < minValue) {
            minValue = arr[i]; // Update the smallest element found so far
            index = i; // Update the index of the smallest element
        }
    }
}

console.log(index);
