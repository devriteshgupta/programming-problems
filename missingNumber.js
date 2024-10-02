let arr = [0,1,2,3,4,5,7]; // missing number = 6

let missingNumber = (input) => {
    let arrLength = input.length;

    let sumOfAllnNumber = (arrLength * (arrLength + 1)) / 2;

    let sumOfInput = input.reduce((a,b) => a + b, 0);

    return sumOfAllnNumber - sumOfInput;
}

console.log(missingNumber(arr));