


let A = [1,2,3,4,5,6];
let count = 0
for(let i = 0; i < A.length; i++){
    for(let j = i; j < A.length; j++){
        bag = []
        for(let k = i; k <= j; k++){
            bag.push(A[k])
        }
        let len = bag.length-1
        if(bag[0] % 2==1 && bag[len] % 2===1){
            count +=1
        }
    } 
}
console.log(count)