function sortWithIndex(arr){

    let indexArr = []

    for(let i = 0; i < arr.length; i++){
        indexArr.push([arr[i] , i])
    }


    const n = indexArr.length;
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n -i -1; j++){
            if(indexArr[j][0] > indexArr[j+1][0]){

                const temp = indexArr[j];
                indexArr[j] = indexArr[j+1];
                indexArr[j + 1] = temp
            }
        }
    }


    let sortedIndex = [];
    for(let i = 0; i < n; i++){
        sortedIndex.push(indexArr[i][1]);
    }

    for(let i = 0; i < sortedIndex.length; i++){
        process.stdout.write(sortedIndex[i] + " ")
    }
    console.log()

}




function runProgram(input) {
  // Write code here
  input = input.trim().split("\n")
  let n = +input[0]
  let arr = input[1].trim().split(" ").map(Number)
  sortWithIndex(arr)
}

















