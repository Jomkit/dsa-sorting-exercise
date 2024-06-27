function selectionSort(arr) {
    // two loops
    // outer loop - iterate through arr
    // inner loop - compare val from outer to every other val in arr
    let min;
    let swapIndex;
    for(let i=0; i<arr.length; i++){
        min = arr[i];
        for(let j=i; j<arr.length; j++){
            if(arr[j] < min) {
                min = arr[j];
                swapIndex = j;
            }
        }
        if(arr[i] !== min) {
            let temp = arr[i];
            arr[i] = min;
            arr[swapIndex] = temp;
        }
    }
    return arr;
}

module.exports = selectionSort;