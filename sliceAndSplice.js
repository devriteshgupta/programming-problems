let arr = [9, 5, 7, 8, 4];

// Find the index of the element '5'
const index = arr.indexOf(5);
console.log(index)

if (index !== -1) {
  // Insert '100' after the element '5'
  let a = arr.slice(index+1);
  // let b = arr.splice(index+1,3);
//   arr = [...a, 100, ...b];
  console.log(a)
  // console.log(b)
}

console.log('Modified Array:', arr);

let arr1 = ["apple", "banana", "grape"];
let arr2 = ["Onion", "Potato"];
let a  = [...arr1, ...arr2];
console.log(arr1);
console.log(arr2);
console.log(a);
let k = a.splice(2, 2, "Mango");
console.log(k)
console.log(a)

const months = ["Jan", "Mar", "Apr", "May"];

// Inserting an element at index 1
// const months2 = months.toSpliced(1, 0, "Feb");
// console.log(months2); // ["Jan", "Feb", "Mar", "Apr", "May"]