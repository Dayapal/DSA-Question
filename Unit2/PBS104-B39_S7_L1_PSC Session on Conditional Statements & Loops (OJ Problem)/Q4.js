

function strangePattern(N,M){
    //write your code here
    for(let i=0; i<N*2; i++){
      let bag = ''
      if(i%2 ==0){
        for(let j =0; j<M; j++){
          bag += "/\\"
        }
        console.log("+" + bag + "+")
      }
      else{
      for(let j=0; j<M; j++){
         bag += '\\/'
      }
      console.log("+" + bag + "+")
    }
    }
  }


  /*

+/\/\/\/\+
+\/\/\/\/+
+/\/\/\/\+
+\/\/\/\/+
+/\/\/\/\+
+\/\/\/\/+


  */