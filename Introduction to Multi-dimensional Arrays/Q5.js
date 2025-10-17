

function specificDiagonals(R, C, matrix, K){
    //write code here
    let posI = -1, posJ = -1;
    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            if (matrix[i][j] === K) {
                posI = i;
                posJ = j;
                break;                                   
            }
        }
        if (posI !== -1) break; 
    }

    if (posI === -1) {
        console.log("Element not found");
        return;
    }

   
    let i = posI, j = posJ;

    
    while (i > 0 && j > 0) {
        i--;
        j--;
    }

    let bag = "";
    
    while (i < R && j < C) {
        bag += matrix[i][j] + " ";
        i++;
        j++;
    }
    console.log(bag.trim());

   
    i = posI;
    j = posJ;

    
    while (i > 0 && j < C - 1) {
        i--;
        j++;
    }

    bag = "";
  
    while (i < R && j >= 0) {
        bag += matrix[i][j] + " ";
        i++;
        j--;
    }
    console.log(bag.trim());
    
    
  
}




// 3 3
// 1 2 3
// 4 5 6
// 7 8 9
// 6