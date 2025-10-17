function findMaxEqualSum(arr) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    let leftSum = 0;
    let rightSum = 0;
    let maxEqualSum = 0;
    let flag = 0;  // Used to alternate the turn between left and right

    while (leftIndex < rightIndex) {
        if (flag === 0) {
            leftSum += arr[leftIndex];
            leftIndex++;
            flag = 1;  // Switch to right's turn
        }

        if (leftSum > rightSum && rightIndex > leftIndex) {
            rightSum += arr[rightIndex];
            rightIndex--;
        }

        if (rightSum > leftSum && leftIndex < rightIndex) {
            leftSum += arr[leftIndex];
            leftIndex++;
        }

        if (leftSum === rightSum) {
            maxEqualSum = leftSum;
            flag = 0;  // Reset flag to continue alternating from the left
        }
    }

    console.log(maxEqualSum);
}
