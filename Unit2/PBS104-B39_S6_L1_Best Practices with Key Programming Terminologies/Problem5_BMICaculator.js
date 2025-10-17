

let weight = 70  // this is the weight 
let height = 1.75 // this is the height 
if(weight < 0 && height < 0){
     console.log("Invalid input height and weight can not be zero")
}
let BMI = weight/(height*height)   // calcuting the BMI 
let format = BMI.toFixed(2)       // formating the number is 2 digit decimal
console.log(`Your BMI is ${format}`)  // printing the body mass