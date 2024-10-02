let arr = [1,2,3,4,5];
let str = "ritesh";

//Approach - 1
let reverseVal1 = (input) => {
    let newArr = [];
    let newStr = "";
    for (let i = input.length - 1; i >= 0; i--) {
        newArr.push(input[i]);
        newStr += input[i];
    }
console.log(newArr)
    return newArr, newStr;
}

console.log(reverseVal1(arr));

//Approach - 2
let reverseVal2 = (input) => {
    let newArr = [];
    let newStr = "";
    let j = input.length - 1;
    for (let i = 0; i < input.length/2; i++) {
        [input[i], input[j]] = [input[j], input[i]];
        j--;
    }
    newArr = input;
    newStr = input;

    return newArr, newStr;
}

console.log(reverseVal2(str));