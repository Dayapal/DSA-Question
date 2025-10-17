let matrix = [
[1,2,3,4],
[5,6,7,8],
[9,10,11,12]]


let n = matrix.length;
    let m;
    for(let i = 0; i < n; i++){
       m = matrix[i].length;

    }
    let l = 0;
    let r = m-1;
    let t = 0;
    let b = n-1;
    let ttl = n * m
    let mat = []
    let count = 0
    while(count < ttl ){
        for(let i = l; i <= r && count < ttl; i++){
            mat.push(matrix[t][i]);
            count++
        }
        t++
        for(let i = t; i <= b && count < ttl; i++){
            mat.push(matrix[i][r]);
            count++
        }
        r--
        for(let i = r; i >= l && count < ttl; i--){
            mat.push(matrix[b][i]);
            count++
        }
        b--
        for(let i = b; i >= t && count < ttl; i--){
            mat.push(matrix[i][l]);
            count++
        }
        l++
    }
  console.log(mat)