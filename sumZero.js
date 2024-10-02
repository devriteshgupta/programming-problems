/*Given an array of distinct elements. The task is to find triplets in the array whose sum is zero.

Examples : 

Input: arr[] = {0, -1, 2, -3, 1}
Output: (0 -1 1), (2 -3 1)
Explanation: The triplets with zero sum are 0 + -1 + 1 = 0 and 2 + -3 + 1 = 0  

Input: arr[] = {1, -2, 1, 0, 5}
Output: 1 -2  1
Explanation: The triplets with zero sum is 1 + -2 + 1 = 0   

let arr = [0, -1, 2, -3, 1];*/

for (let i = 0; i < arr.length-1; i++) {
    let subArr = [];
    subArr.push(arr[i])
    for (let j = i+1; j < arr.length; j++) {
        if(subArr.length !== 3) {
            subArr.push(arr[j]);
        } else {
            let sum = subArr.reduce((a, b) => a+b, 0);
            if (sum === 0) {
                result.push(subArr);
            } else if(j < arr.length) {
                let subArr = [];
                subArr.push(arr[i]);
                subArr.push(arr[j]);
            }
        }
        
    }
}