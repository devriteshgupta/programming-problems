let recusiveFunc = (n) => {
    if (n == 0) {
        return 1;
    }
    
    return 2 * recusiveFunc(n-1);
}

console.log(recusiveFunc(4))