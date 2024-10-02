let arr = [1, 2, [3, 4], [5, [6, 7]]];

let flattenArr = (arr, newArr = []) => {
    for (let  i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flattenArr(arr[i], newArr); //recursive func
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(flattenArr(arr))

