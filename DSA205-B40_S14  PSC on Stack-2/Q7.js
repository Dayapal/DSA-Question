function findLeaders(arr) {
    const leaders = [];
    let maxFromRight = arr[arr.length - 1];
    
    leaders.push(maxFromRight);
  
    for (let i = arr.length - 2; i >= 0; i--) {
        if (arr[i] >= maxFromRight) {
            leaders.push(arr[i]);
            maxFromRight = arr[i];
        }
    }
    

    let n = leaders.length;
    let bag = ""
    for(let i = n-1; i >=0; i--){
        bag += leaders[i] + " "
    }
    console.log(bag)
}

// 6
// 16 17 4 3 5 2
