

let N = 5;  
let M = 6;
let arr = [
    [1,2,3,4,5,6],
    [7,8,9,10,11,12],
    [13,14,15,16,17,18],
    [19,20,21,22,23,24],
    [25,26,27,28,29,30]
];

let cl = 0, cr = M - 1;
let rt = 0, rb = N - 1;
let count = 0; 
let bag = '';

while(count < N*M ){
    for(let i = rt; i <= rb && count < N * M; i++){
        bag += arr[i][cl] + " ";
        count++
    }
    cl++
    for(let i = cl; i <= cr && count < N *M; i++){
        bag += arr[rb][i] + " ";
        count++
    }
    rb--
    
    for(let i = rb; i >= rt && count < N * M; i--){
        bag += arr[i][cr] + " ";
        count++
    }
    cr--
    for(let i = cr; i >= cl  && count < N * M; i--){
        bag += arr[rt][i] += " ";
        count++
    }
    rt++
}
console.log(bag)



