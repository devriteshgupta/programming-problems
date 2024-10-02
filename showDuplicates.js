const arr = [1, 2, 3, 6, 3, 6, 2];

let repeatedElement = (arr) => {
    let repeatedArr = [];
    let map = new Map();
    for (let i =0; i < arr.length; i++) {
        if (!map.get(arr[i])) {
            map.set(arr[i], 1);
        } else {
            repeatedArr.push(arr[i])
        }
    }
    return repeatedArr;
}

console.log(repeatedElement(arr))