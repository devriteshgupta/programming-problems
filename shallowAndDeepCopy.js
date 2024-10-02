let employee = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: {a:50000, b:8000}
}
 
console.log("Employee=> ", employee);
let newEmployee = {};
// newEmployee = employee;    // Shallow copy
// Object.assign(newEmployee, employee);// Shallow copy (1 level deep)
// newEmployee = {...employee} // Shallow copy (1 level deep)
newEmployee = JSON.parse(JSON.stringify(employee)); // Deep copy


console.log("New Employee=> ", newEmployee);
 
console.log("---------After modification----------");
employee.salary["a"] = 100;
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);