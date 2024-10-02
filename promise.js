const calculate = async (a, b, operation) => {
    try{
    let i = await operation(a, b);
    console.log("1", i);
    return i;
    }catch(err){
        console.log(err)
    }
};

const addition = async (a, b) => {
    return new Promise((resolve, reject) => {
        if(a>b){
        // setTimeout(() => {
            console.log("2");
            resolve(a + b);
        // }, 2000);
    }else{
        reject("Something wrong")
    }
    });
};

// function substraction(a, b) {
//     return a - b;
// };

// function multiplication(a, b) {
//     return a * b;
// };

// function division(a, b) {
//     return a / b;
// };

const additionResult = await calculate(5, 4, addition);
// const substractionResult = await calculate(10,4, substraction);
// const multiplicationResult = await calculate(10,4, multiplication);
// const divisionResult = await calculate(10,4, division);
console.log('Addition Result', additionResult);
// console.log('Substraction Result', substractionResult);
// console.log('Multiplication Result', multiplicationResult);
// console.log('Division Result', divisionResult);