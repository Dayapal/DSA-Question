

function isHappyNumber(n) {
    // Function to calculate the sum of squares of digits of a number
    function sumOfSquares(num) {
        let sum = 0;
        while (num > 0) {
            let digit = num % 10;
            sum += digit ** 2;
            num = Math.floor(num / 10);
        }
        return sum;
    }

    // Object to store seen numbers (to detect cycles)
    let seenNumbers = {};

    // Keep looping until we find 1 or a cycle
    while (n !== 1) {
        n = sumOfSquares(n);
        
        // If the number has already been seen, it means there's a cycle
        if (seenNumbers[n] !== undefined) {
            console.log("false");
            return false;
        }

        // Mark the number as seen
        seenNumbers[n] = true;
    }

    console.log("true");
    return true;
}

// Example usage
isHappyNumber(19);
