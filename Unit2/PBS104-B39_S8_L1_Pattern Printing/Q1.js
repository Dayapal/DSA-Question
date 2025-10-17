

/*
Pattern of Inverted L

Description

You are given a number stored in a variable with the name,N

Print the pattern as shown below, according to the value stored inN

For example, consider the value stored inN = 5

Then, the required output will be, which represents an invertedL

* * * * *
*
*
*
*

*/

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
