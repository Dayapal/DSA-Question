
// 6
// 2 0 2 1 1 0   here sort this in place   

// 0 = red
// 1 = white
// 2 = blue


let arr = [2, 0, 2, 1, 1, 0];

function sortColor(arr) {
    let low = 0
    let i = 0
    let high = arr.length - 1

    while (i <= high) {
        if (arr[i] === 0) {
            [arr[i], arr[low]] = [arr[low], arr[i]];
            i++;
            low++
        }
        else if (arr[i] === 1) {
            i++
        } else if (arr[i] === 2) {
            [arr[i], arr[high]] = [arr[high], arr[i]]
            high--
        }
    }
    return arr
}

console.log(sortColor(arr))

let str = "racecard"

function checkPalindrome(str){
    let left = 0
    let right = str.length -1
    while(left < right){
        if(str[left] != str[right]){
            return false
        }
        left++
        right--
    }
    return true
}

console.log(checkPalindrome(str))
console.log()