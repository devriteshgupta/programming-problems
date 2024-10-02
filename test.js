const items = [
    { name: 'Apple', category: 'Fruit' },
    { name: 'Onion', category: 'Vegetable' },
    { name: 'Orange', category: 'Fruit' },
    { name: 'Lettuce', category: 'Vegetable' },
  ];

let result = items.reduce((accumulator, item) => {
    const category = item.category;
    if (!accumulator.hasOwnProperty(category)) {
      accumulator[category] = []
    }
    accumulator[category].push(item.name);
    return accumulator
  }, {})
// console.log(result);

// console.log(null === undefined);

// Program to countdown till 1

// recursive function
function counter(count) {

    // display count
    console.log(count);

    // condition for stopping
    if(count > 1) {

        // decrease count
        count = count - 1;

        // call counter with new value of count
        counter(count);
    } else {

        // terminate execution
        return 5;
    };
};
  
console.log(counter(5))

