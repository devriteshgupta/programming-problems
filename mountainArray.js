/*Given an array. The task is to check whether it is a mountain array or not. A mountain array is an array of length at least 3 with elements strictly increasing from starting till an index i, and then strictly decreasing from index i to last index.
More formally arr[0] < arr[1] < arr[i] >arr[i+1] > arr[i+2] > arr[N-1]
 
Input: arr= [4, 4, 3, 2, 1]
Output: false
 
Input: arr = [1, 2, 3, 4, 9, 8, 7, 6, 5]
Output: true*/

let arr = [1, 2, 3, 4, 9, 6, 7, 6, 5];

let isMountain = (arr) => {
    
    if (arr.length < 3) return false;

    let mountainTop = null;
    let decArr = [];
    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i] < arr[i+1] && mountainTop <= arr[i+1]) {
            mountainTop = arr[i+1];
        } else{
           decArr.push(arr[i])
        }
    }

    if ((decArr.length < 2) || !mountainTop) return false;
    
    for (let j = 0; j < decArr.length-1; j++) {
        if (decArr[j] <= decArr[j+1]) {
            return false;
        }
    }
    
    return true;
}

console.log(isMountain(arr))