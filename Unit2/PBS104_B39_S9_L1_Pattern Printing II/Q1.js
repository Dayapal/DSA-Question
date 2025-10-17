let N = 5
for(let i=0; i<N; i++){
    let bag = ""
    for(let j=i; j<N; j++){
         bag += " "
    }
    for(let j=0; j<=i; j++){
        bag += "*"
    }
    for(let j=0; j<i; j++){
        bag += "*"
    }
    console.log(bag)
}

// function runProgram(input) {
//     // Write code here
//     input=input.trim().split('\n')
//     let tc=+input[0];
//     let line=1
//     for(let i=0;i<tc;i++){
//       let n=+input[line++]
//       let str=input[line++]
//       numberOfPing(n,str)
//     }
//   }
//   function numberOfPing(n,str){
//     let map={};
//     for(let i=0;i<str.length;i++){
//       if(map[str[i]]===undefined){
//         map[str[i]]=1;
//       }
//       else{
//         map[str[i]]++;
//       }
//     }
//     if(map['p']===undefined || map['i']===undefined || map['n']===undefined || map['g']===undefined ){
//       console.log(0);
//     }
//     else{
//       let ans = Infinity;
//       ans = Math.min(ans,map['p']);
//       ans = Math.min(ans,map['i']);
//       ans = Math.min(ans,map['n']);
//       ans = Math.min(ans,map['g']);
//       console.log(ans);
//     }
//   }
//   Messages addressed to "meeting group chat" will also appear in the meeting group chat in Team Chat