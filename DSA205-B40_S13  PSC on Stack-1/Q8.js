function nearestGreaterElement(arr) {
    const n = arr.length;
    const leftNearest = [];
    const rightNearest = [];
    const result = [];
    const stack = [];

    for (let i = 0; i < n; i++) {
        leftNearest.push(-1);
        rightNearest.push(-1);
        result.push(undefined); 
    }
    
    for (let i = 0; i < n; i++) {
        while (stack.length && arr[stack[stack.length - 1]] <= arr[i]) {
            stack.pop();
        }
        if (stack.length) {
            leftNearest[i] = arr[stack[stack.length - 1]];
        }
        stack.push(i);
    }
    stack.length = 0;

    for (let i = n - 1; i >= 0; i--) {
        while (stack.length && arr[stack[stack.length - 1]] <= arr[i]) {
            stack.pop();
        }
        if (stack.length) {
            rightNearest[i] = arr[stack[stack.length - 1]];
        }
        stack.push(i);
    }

    
    for (let i = 0; i < n; i++) {
        if (leftNearest[i] === -1 && rightNearest[i] === -1) {
            result[i] = -1
        } else if (leftNearest[i] !== -1 && rightNearest[i] !== -1) {
         
            result[i] = leftNearest[i];
        } else {
           
            result[i] = leftNearest[i] !== -1 ? leftNearest[i] : rightNearest[i];
        }
    }

    return result;
}

// Test cases
console.log(nearestGreaterElement([3, 2, 1, 3, 1])); // Expected output: [-1, 3, 2, -1, 3]
console.log(nearestGreaterElement([3, 1, 8, 9, 10, 2])); // Expected output: [8, 3, 9, 10, -1, 10]
console.log(nearestGreaterElement([6, 7, 9, 5, 5, 4])); // Expected output: [7, 9, -1, 9, 9, 5]
