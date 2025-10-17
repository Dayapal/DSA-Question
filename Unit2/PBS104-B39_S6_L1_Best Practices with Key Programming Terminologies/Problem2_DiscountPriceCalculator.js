
let price = 15  // this the price 
if(price > 20){  // here comparison is happening 
    let discount = price * 10/100;   // discount checking 
    let fp  = price-discount      // here I am calculating the final price
    console.log(`The final price of the item is ${fp}`) // printing the result
}else{ 
    console.log(`The final price of the item is ${price}`)  // printing the result
}