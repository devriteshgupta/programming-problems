class Calculator {
    constructor(value = 0) {
        this.value = value;
    }

    add(num) {
        this.value += num;
        return this;
    }

    sub(num) {
        this.value -= num;
        return this;
    }

    mul(num) {
        this.value *= num;
        return this;
    }

    getResult() {
        return this.value;
    }
}

// Example usage
const a = new Calculator();
const result = a.mul(10).getResult();
console.log(result); // Output: 20
