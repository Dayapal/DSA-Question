

function runProgram(input) {
    // Parse the input
    input = input.trim().split('\n');
    let tc = +input[0]; // Number of test cases
     
    let mat = [];
    for (let i = 1; i <= tc; i++) {
      mat.push(input[i].split(" ").map(Number)); // Storing operations as arrays
    }
  
    let stack = [];
  
    // Iterate through each operation in the matrix
    for (let i = 0; i < mat.length; i++) {
      if (mat[i][0] === 1) {
        let num = mat[i][1]; // Push operation: Store the number
        stack.push(num);
      } else if (mat[i][0] === 2) {
        // Pop operation: Remove the top element if the stack isn't empty
        if (stack.length > 0) {
          stack.pop();
        }
      } else if (mat[i][0] === 3) {
        // Print top element if the stack isn't empty
        if (stack.length > 0) {
          console.log(stack[stack.length - 1]);
        } else {
          console.log("Empty!");
        }
      }
    }
  }
  