function weightLiftingCompetition(N, weights) {
    //write code here
       let left = 0;
       let right = N - 1;
       let harry = weights[left];
       let john = 0;
       let hsum = weights[left];
       let jsum = 0;
       left += 1;
       while (left <= right) {
           while (john <= harry && left <= right) {
               john += weights[right];
               jsum += weights[right];
               right -= 1;
           }
           harry = 0;
           while (harry <= john && left <= right) {
               harry += weights[left];
               hsum += weights[left];
               left += 1;  
           }
   
           john = 0;
       }
       console.log(hsum, jsum);
   }