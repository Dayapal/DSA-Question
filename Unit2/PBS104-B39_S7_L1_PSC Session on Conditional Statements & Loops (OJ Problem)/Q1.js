function invertedL(N) {
    // Write code here
    let bag = ''
    for(let i=0; i<N; i++){
       let bag = ''
      for(let j=0; j<N; j++){
        if(i==0 || j==0 ){
          bag += "* "
        }
      }
      console.log(bag)
    }
    
}

/*

* * * * *
*
*
*
*

*/