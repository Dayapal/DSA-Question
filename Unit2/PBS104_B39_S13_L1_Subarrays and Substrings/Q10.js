
function isVowel(char) {
    return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u';
}
function countSubstringsWithConsecutiveVowels(N, str) {
    let count = 0;

    // Generate all possible substrings
    for (let i = 0; i < N; i++) {
        let vowelCount = 0;
        for (let j = i; j < N; j++) {
            if (isVowel(str[j])) {
                vowelCount++;
            } else {
                vowelCount = 0;
            }

            // If we find two consecutive vowels, count all substrings from i to j
            if (vowelCount >= 2) {
                count += (N - j);
                break;
            }
        }
    }

    console.log(count);
}

// Example usage:
let N = 4;
let str = "bead";
countSubstringsWithConsecutiveVowels(N, str);
