let str1 = "rac eca r";
let str2 = "ritesh";

// Approach - 1

let isPalindrome1 = (str) => {
    let cleanStr = str.replace(/[^a-zA-Z0-9]/g, "");
    let reverseStr = cleanStr.split("").reverse().join("");

    if (cleanStr == reverseStr) return "It is a Palindrome"
    else return "It is not a Palindrome"
}

console.log(isPalindrome1(str1));

// Approach - 2

let isPalindrome2 = (str) => {
    let cleanStr = str.replace(/[^a-zA-Z0-9]/g, "");
    
    for (let i = 0, j = cleanStr.length - 1; i < cleanStr.length /2; i++) {
        if (cleanStr[i] !== cleanStr[j])
            return "It is not a Palindrome"
        j--;
    }

    return "It is a Palindrome"
}

console.log(isPalindrome2(str2));