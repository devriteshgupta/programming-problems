let arr = [2,5,1,3,7,6,9,0,4]; //Input

// Sorting technique - 1
let sortArr1 = arr.sort((a, b) => a-b);

console.log(sortArr1)

// Sorting technique - 2
let sortArr2 = (input) => {
    for (let i = 0; i < input.length; i++) {
        if (input[i] > input[i+1]) {
            [input[i], input[i+1]] = [input[i+1], input[i]];
            i = -1;
        }
    }
    return input;
}

console.log(sortArr2(arr))


// Sorting technique - 3
let sortArr3 = (input) => {
    if (input.length < 2) return input;
    let mid = Math.floor(input.length / 2);
    let left = sortArr3(input.slice(0, mid));
    let right = sortArr3(input.slice(mid));

    return mergeArray(left, right);
}

let mergeArray = (arr1, arr2, res = [], i = 0, j = 0) => {
    while (arr1.length && arr2.length) {
        if (arr1[i] <= arr2[j]) {
            res.push(arr1[i]);
            i++;
        }  else {
            res.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        res.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        res.push(arr2[j]);
        j++;
    }

    return res;
}

// console.log(sortArr3(arr))