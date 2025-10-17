


function checkPrime(N){
    if(N < 2){
        return false
    }else{
        for(let i = 2; i * i <= N; i++){
            if( N % i === 0){
                return false
            }
        }
        return true
    }
}

let str = 'abc';

let count  = 0
for(let i = 0; i < str.length; i++){
    for(let j = i; j < str.length; j++){
        let bag = "";
        for(let k = i; k <= j; k++){
            bag += str[k]
        }
        if(checkPrime(bag.length)){
            count += 1
        }
    }
}
console.log(count)