
function brickWall(N){
    for(let i = 0; i < N; i++){
        let bag = ""
        for(let j = 0; j < N; j++){
            if(i % 2 === 0){
                bag += "[] " + " "  
            }else{
                bag += " "  + "[] "
            }
        }
        console.log(bag)
    }
   
}

let brick = brickWall(5)