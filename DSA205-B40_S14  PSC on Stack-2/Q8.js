


function findLeaders(arr) {
    const leaders = [];
    let maxFromRight = arr[arr.length - 1];
    
    // The last element is always a leader
    leaders.push(maxFromRight);
    
    // Traverse the array from right to left
    for (let i = arr.length - 2; i >= 0; i--) {
        if (arr[i] >= maxFromRight) {
            leaders.push(arr[i]);
            maxFromRight = arr[i];
        }
    }
    
    // Since we collected leaders from right to left, we need to reverse the result
    // return leaders.reverse();
    let n = leaders.length;
    let bag = ""
    for(let i = n-1; i >=0; i--){
        bag += leaders[i] + " "
    }
    console.log(bag)
}

// Example usage
const marks = [16, 17, 4, 3, 5, 2];
console.log(findLeaders(marks)); // Output: [17, 5, 2]
