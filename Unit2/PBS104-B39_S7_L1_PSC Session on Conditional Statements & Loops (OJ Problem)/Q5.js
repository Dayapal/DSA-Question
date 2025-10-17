

function binarySquare(N){
    //write your code here
    for(let i=0; i<N; i++){
      let bag = ''
      for(let j=0; j<N; j++){
        if((i+j) % 2===0){
          bag += "1 "
        }else{
          bag += "0 "
        }
      }
      console.log(bag)
    }
  }

  /*

1 0 1
0 1 0
1 0 1

  */