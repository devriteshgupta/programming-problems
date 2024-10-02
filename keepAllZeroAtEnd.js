/*
I/P - [0,3,1,3,0,0,1,2,3,8,0,9,0]
O/P - [3,1,3,1,2,3,8,9,0,0,0,0,0]
*/

let resultArr = (arr) => {
    let newArr = [];
    let zeroArr = []
    // let map = new Map();
    
    for (let i= 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            // map.set(arr[i], (map.get(arr[i]) || 0) + 1);
            zeroArr.push(arr[i]);
        } else {
            newArr.push(arr[i]);
        }
    }
    newArr.push(...zeroArr);
    
    return newArr;
}
const inputArr = [0,3,1,3,0,0,1,2,3,8,0,9,0];

console.log(resultArr(inputArr))