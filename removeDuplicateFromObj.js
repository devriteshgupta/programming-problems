let input = {
    A: [1, 2, 3, 4, 2, 5, 3, 3, 5],
    B: [2, 4, 6, 3, 4, 2]
};

// Approach - 1

let removeDuplicateValues1 = (input) => {
    for (let i = 0; i < Object.keys(input).length; i++) {
        let arr = Object.values(input)[i];
        let uniqueVal = [];
        for (let i = 0; i < arr.length; i++) {
            if (uniqueVal.indexOf(arr[i]) < 0) uniqueVal.push(arr[i]);
        }

        input[Object.keys(input)[i]] = uniqueVal;
    }

    return input;
}

console.log(removeDuplicateValues1(input));


// Approach - 2 ( Using Set() )

let removeDuplicateValues2 = (input) => {
    for (let i = 0; i < Object.keys(input).length; i++) {
        let uniqueVal = [...new Set(Object.values(input)[i])]; // [...new Set(array)] 
                                                                    //it returns unique element only
        input[Object.keys(input)[i]] = uniqueVal;
    }

    return input;
}

console.log(removeDuplicateValues2(input));