function longestSubstringK(n, s, k) {
    let result = 0;
    // Loop through each possible number of unique characters (1 to 26 for lowercase letters)
    for (let targetUniques = 1; targetUniques <= 26; targetUniques++) {
        let i = 0, j = 0;
        let freq = {}; // Frequency map for characters
        let charsWithFreqK = 0;

        while (j < n) {
            // Expand the window if the number of unique characters is within the target
            if (Object.keys(freq).length <= targetUniques) {
                let char = s[j];
                if (!freq[char]) {
                    freq[char] = 0;
                }
                freq[char]++;
                if (freq[char] === k) {
                    charsWithFreqK++;
                }
                j++;
            } else {
                // Shrink the window if the number of unique characters exceeds the target
                let char = s[i];
                if (freq[char] === k) {
                    charsWithFreqK--;
                }
                freq[char]--;
                if (freq[char] === 0) {
                    delete freq[char];
                }
                i++;
            }

            // Check if the current window is valid
            if (
                Object.keys(freq).length === targetUniques &&
                charsWithFreqK === targetUniques
            ) {
                result = Math.max(result, j - i);
            }
        }
    }

    console.log(result);
}

// Example usage:
let n = 5; // Length of the string
let s = "aaabb"; // The input string
let k = 3; // Minimum frequency
longestSubstringK(n, s, k);
