
function arrangeMedals(A) {
    let low = 0;
    let high = A.length - 1;
    let current = 0;

    while (current <= high) {
        if (A[current] === 0) {
            // Swap A[current] and A[low]
            [A[current], A[low]] = [A[low], A[current]];
            low++;
            current++;
        } else if (A[current] === 2) {
            // Swap A[current] and A[high]
            [A[current], A[high]] = [A[high], A[current]];
            high--;
        } else {
            // A[current] === 1, move current forward
            current++;
        }
    }
}
