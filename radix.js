function getDigit(num, place){
    let digit = Math.floor(num/(Math.pow(10, place))) % 10;
    return digit;
}

// digitCount, returns exponent, corresponds to 
// the count of highest place (100's, 10's, 1's, etc)
function digitCount(num){
    let count = Math.floor(Math.log10(num)) + 1;
    return count;
}

function mostDigits(arr) {
    if(arr.length===0) return 0;

    let hiCount = 0;
    for(let i = 0; i < arr.length; i++){
        let count = digitCount(arr[i]);
        if(count > hiCount) hiCount = count;
    }
    return hiCount;
}

function radixSort(arr) {
    let largestNum = mostDigits(arr);
    for(let place = 0; place < largestNum; place++){
        let bucket = Array.from({ length: 10 }, () => []);
        for(let j=0; j<arr.length; j++){
            let num = arr[j];
            let digit = getDigit(num, place);
            bucket[digit].push(num);
        }
        arr = [].concat(...bucket);
    }
    return arr;
}

module.exports = {getDigit, digitCount, mostDigits, radixSort};