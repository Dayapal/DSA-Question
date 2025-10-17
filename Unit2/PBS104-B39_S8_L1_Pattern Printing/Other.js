
// let n = 5
// for(let i=1; i<=5; i++){
//     let bag = ''
//     for(let j=i; j<n; j++){
//         bag += "-"
//     }
//     for(let j=1; j<=i; j++){
//         bag += "*"
//     }
//     console.log(bag)
// }
// for(let i=1; i<5; i++){
//     let bag = ''
//     for(let j=1; j<=i; j++){
//         bag += "-"
//     }
//     for(let j=i; j<n; j++){
//         bag += "*"
//     }
//     console.log(bag)
// }

// --------------------------------------------------------------------------------


// let n = 5
// for(let i=1; i<=5; i++){
//     let bag = ''
//     for(let j=i; j<n; j++){
//         bag += " "
//     }
//     for(let j=1; j<=i; j++){
//         bag += "*"
//     }
//     for(let j=1; j<i; j++){
//         bag += "*"
        
//     }
//     for(let j=i; j<n; j++){
//         bag += " "
//     }
//     for(let j=i; j<n; j++){
//         bag += " "
//     }
    
//       for(let j=1; j<=i; j++){
//         bag += "*"
//     }
//     for(let j=1; j<i; j++){
//         bag += "*"
        
//     }
//     console.log(bag)
// }
// ----------------------------------------------------------------

let N = 5
for(let i=0; i<N; i++){
    let bag = ""
    for(let j=i; j<N; j++){
         bag += "-"
    }
    for(let j=0; j<=i; j++){
        bag += "*"
    }
    for(let j=0; j<i; j++){
        bag += "*"
    }
    console.log(bag)
}