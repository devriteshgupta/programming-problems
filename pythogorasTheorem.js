let pyTheoram = (n) => {
    let result = [];
    for (let i = 1; i <=n; i++) {
        for(let j = 1; j<=n; j++) {
            for (let k = 1; k<=n; k++) {
                let a = i;
                let b = j;
                let c = k;
                let matchingTheroem = checkPyRheorem(a, b ,c);
                
                if(matchingTheroem) {
                    result.push(matchingTheroem)
                }
                
            }
        }
    }
}

let checkPyRheorem = (a, b, c) => {
    if ((a*a) + (b*b) === (c*c)) {
        return [a, b, c];
    }
    return [];
}