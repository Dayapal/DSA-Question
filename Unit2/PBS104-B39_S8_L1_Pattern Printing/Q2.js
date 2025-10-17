function numberPattern(N){
  //write your code here
  for(let i=1; i<=N; i++){
    let bag =""
    for(let j=1; j<=i; j++){
      bag +=j;
    }
    console.log(bag)
  }
  for(let i= N-1; i>=1; i--){
    let bag ="";
    for(let j=1; j<=i; j++){
      bag +=j
    }
    console.log(bag)
  }
}
numberPattern(4)


/*


1

12

123

1234

12345

1234

123

12

1




*/
  