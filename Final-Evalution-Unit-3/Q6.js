function solve(n, arr) {
    let stk = []; // Initialize an empty stack
    let ans = new Array(n).fill(0); // Initialize ans array with size n, filled with 0s

    // Loop from n - 1 down to 0
    for (let i = n - 1; i >= 0; i--) {
        // Pop elements from stack while stack is not empty and arr[stk.peek()] <= arr[i]
        while (stk.length > 0 && arr[stk[stk.length - 1]] <= arr[i]) {
            stk.pop();
        }

        // If stack is empty, set ans[i] to 0
        if (stk.length === 0) {
            ans[i] = 0;
        } else {
            // Else, set ans[i] to stk.peek() - i
            ans[i] = stk[stk.length - 1] - i;
        }

        // Push the current index i onto the stack
        stk.push(i);
    }

    console.log(ans); // Print the ans array
}

// Example usage
let arr = [30, 40, 50, 60];
let n = arr.length;
solve(n, arr);