function merge2SortedArrays(a1, a2) {
    let i = 0
    let j = 0
    let k = 0
    const ans = new Array(a1.length + a2.length)
    while (i < a1.length && j < a2.length) {
        if (a1[i] < a2[j]) {
            ans[k] = a1[i]
            i++

        } else {
            ans[k] = a2[j]
            j++

        }
        k++
    }
    while (i < a1.length) {
        ans[k] = a1[i]
        k++
        i++
    }
    while (j < a2.length) {
        ans[k] = a2[j]
        j++
        k++
    }
    return ans
}

function mergeSortHelper(arr, s, e) {
    if (s === e) {
        return [arr[s]]
    }
    let midId = Math.floor((s + e) / 2)
    let left_sorted_array = mergeSortHelper(arr, s, midId)
    let right_sorted_array = mergeSortHelper(arr, midId + 1, e)
     
    return merge2SortedArrays(left_sorted_array , right_sorted_array)

}
function mergeSort(arr) {
    return mergeSortHelper(arr, 0, arr.length - 1)
}

let arr = [23, 23, 1, 2, 3, 52, 45, 21]
console.log(mergeSort(arr))