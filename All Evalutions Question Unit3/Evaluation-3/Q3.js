function blackAndWhiteStripes(n, k, s) {
    // Initialize the count of 'W' in the first window
    let whiteCount = 0;
    for (let i = 0; i < k; i++) {
        if (s[i] === "W") {
            whiteCount++;
        }
    }
    // Variables to keep track of the minimum count of 'W'
    let minWhiteCount = whiteCount;
    let currentCount = whiteCount;
    // Slide the window through the string
    for (let i = 0; i + k < n; i++) {
        // Update counts for the sliding window
        if (s[i] === "W") {
            currentCount--;
        }
        if (s[i + k] === "W") {
            currentCount++;
        }
        // Update the minimum count
        minWhiteCount = Math.min(minWhiteCount, currentCount);
    }
    console.log(minWhiteCount);
}
