

function checkVowels(char) {
    // Check if a character is a vowel
    return char === "a" || char === "e" || char === "i" || char === "o" || char === "u";
}

function reverseVowels(str) {
    // Convert the string to an array to modify characters
    let strArr = str.split('');
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (!checkVowels(strArr[left])) {
            left++;
        } else if (!checkVowels(strArr[right])) {
            right--;
        } else {
            // Swap the vowels
            [strArr[left], strArr[right]] = [strArr[right], strArr[left]];
            left++;
            right--;
        }
    }
    
    // Join the array back into a string and return it
    return strArr.join('');
}

let str = 'hello';
console.log(reverseVowels(str)); // Output should be "holle"


