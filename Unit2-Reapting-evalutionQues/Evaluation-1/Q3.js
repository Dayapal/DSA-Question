
// Given a number x, find whether it is a power of 3 or not
function solve(x){
    if(x < 1) return false;

    while(x % 3 ===0){
        x /= 3;
    }
    return x === 1;
}
console.log(solve(9))
console.log(solve(23))
console.log(solve(32))
console.log(solve(27))
