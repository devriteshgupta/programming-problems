const calculate = async (a, b, addition) => {
    try{
    let i = await addition(a, b);
    console.log("1", i);
    return i;
    }catch(err){
        console.log(err)
    }
};

const addition = async (a, b) => {
    return new Promise((resolve, reject) => {
        if(a>b){
        setTimeout(() => {
            console.log("2");
            resolve(a + b);
        }, 2000);
    }else{
        reject("Something wrong")
    }
    });
};

const additionResult = calculate(1, 4, addition);
console.log('Addition Result', additionResult);


const func1 = (a, b) => {
    let sum = a + b;
    const fun2 =  (sum) => {
        let mulplication = a* b;
    }
}