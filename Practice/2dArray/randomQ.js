


function checkVowels(str) {
    for (let char of str) {
        if ("aeiouAEIOU".includes(char)) {
            return true
        }
    }
    return false
}
let n = 3;
let m = 3;
let str = [
    ["b", "b", "c"],
    ["c", "d", 'd'],
    ['d', 'f', 'd']
]
function checkVowelsInArr(str) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (checkVowels(str[j][i])) {
                console.log("Yes")
                return true
            }
        }
    }
    console.log("No")
    return
}
checkVowelsInArr(str)
let str1 = "bbb"
console.log(checkVowels(str1))