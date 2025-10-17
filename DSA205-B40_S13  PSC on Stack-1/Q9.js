

function spanFinancial(p, n) {
    let result = [];
    result[0] = 1;
    let stack = [];
    stack.push(0);

    for (let i = 1; i < n; i++) {
        while (stack.length > 0 && p[stack[stack.length - 1]] <= p[i]) {
            stack.pop();
        }

        if (stack.length === 0) {
            result[i] = i + 1;
        } else {
            result[i] = i - stack[stack.length - 1];
        }
        
        stack.push(i);
    }

    for (let i = 0; i < result.length; i++) {
        process.stdout.write(result[i] + " ");
    }
    console.log();
}
