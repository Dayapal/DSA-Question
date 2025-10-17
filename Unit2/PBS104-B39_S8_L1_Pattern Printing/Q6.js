function patternOfL(N) {
    // Write code here
    for(let i=0; i<N; i++){
      let bag = ''
      for(let j=0; j<N; j++){
        if(i===N-1 || j===0){
          bag += "* "
        }
      }
      console.log(bag)
    }
}


/*

*
*
*
* * * *

*/