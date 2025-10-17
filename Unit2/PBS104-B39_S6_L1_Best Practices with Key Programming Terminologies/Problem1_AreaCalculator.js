

let base = 0    // this is the base
let height = 9 
// let area_Of_Triangle =  (base*height/2)  // here checking the area of Triangle
if(base < 0 || height < 0){   // here comparing is happening 
    console.log("Invalid number, base and hight must be positive numbers")
}else{
    let area_Of_Triangle =  base*height/2     //  here checking the area of Triangle
    let format = area_Of_Triangle.toFixed(1)   // formating the ouput for decimal value
    console.log(`The area of the triangle is ${format}`) // priting the result here
 }

