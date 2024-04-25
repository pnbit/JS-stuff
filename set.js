// Creating a new Set
const fruitSet = new Set();

// Adding elements to the set
fruitSet.add('apple');
fruitSet.add('banana');
fruitSet.add('orange');
fruitSet.add('apple'); // Adding a duplicate value, which will be ignored

// // Checking the size of the set
// console.log('Size of fruitSet:', fruitSet.size); // Output: 3

// // Checking if a value exists in the set
// console.log(fruitSet.has('banana')); // Output: true
// console.log(fruitSet.has('grape')); // Output: false

// Deleting an element from the set
fruitSet.delete('apple');

// Iterating over the set using forEach
console.log('Fruits in the set:');
fruitSet.forEach(fruit => {
  console.log(fruit);
});


