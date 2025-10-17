

// 6
// 1
// 2 5
// 2 7
// 2 9
// 1
// 1

let arr2 = [ [ 1 ], [ 2, 5 ], [ 2, 7 ], [ 2, 9 ], [ 1 ], [ 1 ] ]
let stack = []
let arr = [[1],[2,5],[2,7],[2,9],[1],[1]]

for(let i = 0; i < arr.length; i++){
    if(arr[i][0] ===1){
        if(stack.length ===0){
            console.log("No food")
        }else {
            console.log(stack[stack.length-1]);
            stack.pop()
        }

    }
    else if(arr[i][0] ===2){
        stack.push(arr[i][1])
        
    }
    }
    // No food
    // 9
    // 7