

function fun(s, n) {
    if (n === 0) return 0; // If string length is 0, return 0
    if (n === 1) return 1; // If string length is 1, return 1

    let charCount = {}; // Object to store character counts
    let beg = 0; // Start of the current window
    let res = 0; // Stores the maximum length of unique substring

    // Loop through the string to process each character
    for (let end = 0; end < n; end++) {
        let key = s[end]; // Current character

        // If the character is already in the window
        while (charCount[key] > 0) {
            // Calculate and update the maximum length so far
            res = Math.max(res, end - beg);

            // Reduce the count of the character at the 'beg' position
            charCount[s[beg]]--;

            // Move the 'beg' pointer to the right
            beg++;
        }

        // Add or update the count of the current character
        if (charCount[key] === undefined) {
            charCount[key] = 1;
        } else {
            charCount[key]++;
        }
    }

    // In case the longest substring is at the very end of the string
    return Math.max(res, n - beg);
}

// Example usage:
let s = "abcabcbbabcdefgh";
console.log(fun(s, s.length)); // Output: 3 (substring "abc")
