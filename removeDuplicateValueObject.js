const arr = [{name: "a"}, {name: "b"}, {name: "a"}]; // outpu: [{name: "a"}, {name: "b"}]

let uniqueFunc = () => {
    const seen = new Map();
    let unique = arr.filter(item => {
        const value = item["name"];
        // console.log(seen)
        // console.log(value)
        if (seen.get(value)) {
            // console.log(value)
            return false;
        }
        seen.set(value,1);
        return true;
    });
    return unique;
}

console.log(uniqueFunc())