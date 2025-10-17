// 3
// abbab
// bbabbabab
// bbaabbaa


// Yes      this is the output 
// No
// Yes


function isFrequencyDrome(str) {
    // Find the middle index of the string
    let len = str.length;
    let mid = Math.floor(len / 2);

    // Split the string into two halves
    let firstHalf = str.slice(0, mid);
    let secondHalf = len % 2 === 0 ? str.slice(mid) : str.slice(mid + 1);
    console.log(firstHalf)
    console.log(secondHalf)

    // Helper function to count character frequencies
    function getCharFrequency(s) {
        let freqMap = {};
        for (let char of s) {
            freqMap[char] = (freqMap[char] || 0) + 1;
        }
        return freqMap;
    }

    // Get character frequencies for both halves
    let freq1 = getCharFrequency(firstHalf);
    let freq2 = getCharFrequency(secondHalf);

    // Compare the frequency maps
    let keys1 = Object.keys(freq1);
    let keys2 = Object.keys(freq2);

    if (keys1.length !== keys2.length) return false;

    for (let key of keys1) {
        if (freq1[key] !== freq2[key]) {
            return false;
        }
    }

    return true;
}

// Test cases
console.log(isFrequencyDrome("abbab"))
console.log(isFrequencyDrome("abccab")); // true

// --------------------------------------------------------------------------

// here is my code 

function frequencyDrome(str){

    let len = str.length;
    let mid = Math.floor(str.length/2)

    let fHalf = str.slice(0,mid)
    let sHalf = len % 2 === 0 ? str.slice(mid): str.slice(mid+1)

    function freqCount(str2){
        let map = {}
        for(let i = 0; i < str2.length; i++){
            if(map[str2[i]] === undefined){
                map[str2[i]] = 1
            }else{
                map[str2[i]]++
            }
        }
        return map;
    }

    let freq1 = freqCount(fHalf)
    let freq2 = freqCount(sHalf)
    console.log(freq1)
    console.log(freq2)

    let keys1 = Object.keys(freq1)
    let keys2 = Object.keys(freq2)
    if(keys1.length !== keys2.length) return false;
    for(let key of keys1){
        if(freq1[key] !== freq2[key]){
            console.log("NO")
            return false;
        }
    }
    console.log("YES")
    return true
}


frequencyDrome("bbabbabab")

