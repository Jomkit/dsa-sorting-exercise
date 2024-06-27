/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr){
    let pivIndex = 0;
    let piv = arr[pivIndex];
    for(let i=0; i< arr.length; i++){
        if(i===pivIndex) continue;
        if(arr[i] <= piv) {
            let temp = arr.splice(i, 1);
            arr.unshift(...temp);
            pivIndex++;
        }
    }
    return pivIndex;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr) {
    //base case
    if(arr.length <= 1) return arr;
    let lIndex = 0;
    let rIndex = arr.length-1;
    
    let piv = pivot(arr);

    let left = quickSort(arr.slice(0, piv));
    let right = quickSort(arr.slice(piv+1));
    return [...left, arr[piv], ...right];
}

module.exports = {pivot, quickSort};