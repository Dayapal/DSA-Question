
function runProgram(input) {
    const inputLines = input.split("\n");
   
   for (let i = 1; i <= 2 * parseInt(inputLines[0]); i += 2) {
     let gridSize = parseInt(inputLines[i]);
     let elements = inputLines[i + 1].split(" ").map(Number);
   
     let currentStep = gridSize - 1;
     let sum = elements[0]; 
     let stepCount = 0;
     let index = 0;
   
     while (index < gridSize ** 2 - 1) {
       index += currentStep;
       sum += elements[index];
       stepCount++;
   
      
       if (stepCount === 4) {
         currentStep -= 2;
         stepCount = 0;
       }
     }
   
     console.log(sum);
   }
     
   }
   
   