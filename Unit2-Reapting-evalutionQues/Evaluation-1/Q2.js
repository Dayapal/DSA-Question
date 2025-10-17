
function solve(a,b,c,d){
    let diff = b -a;
    if(b === a+diff && c === b+diff && d === c + diff){
        console.log("Arithmetic")
        return
    }

    let ratio = b/a;
    if( b === a*ratio && c === b * ratio && d === c * ratio){
        console.log("Geometric")
        return;
    }
    console.log("Neither")
}


solve(2,4,6,8)
solve(3,9,27,81)
solve(1,2,4,7)






/* Sequence Validator
Description
Write a program to determine if a sequence of four integers a, b, c, and d forms
an arithmetic sequence, a geometric sequence, or neither. The output should
state "Arithmetic", "Geometric", or "Neither" depending on the properties of the
sequence. 

 3
 2 4 6 8
 3 9 27 81
 1 2 4 7
 
 Hint
Explanation:
First Test Case: The sequence 2, 4, 6, 8 has a consistent difference of 2 between
consecutive terms, hence it's an arithmetic sequence.
Second Test Case: The sequence 3, 9, 27, 81 has a consistent ratio of 3 between
consecutive terms, hence it's a geometric sequence.
Third Test Case: The sequence 1, 2, 4, 7 neither has a consistent difference nor
ratio between consecutive terms, hence it's neither.

*/





