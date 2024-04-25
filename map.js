// // Creating a new Map
// const fruitMap = new Map();

// // Adding key-value pairs to the map
// fruitMap.set('a', 'apple');
// fruitMap.set('b', 'banana');
// fruitMap.set('o', 'orange');

// // Checking the size of the map
// console.log('Size of fruitMap:', fruitMap.size); // Output: 3

// // Accessing values by key
// console.log(fruitMap.get('b')); // Output: 'banana'

// // Checking if a key exists in the map
// console.log(fruitMap.has('o')); // Output: true
// console.log(fruitMap.has('g')); // Output: false

// // Deleting a key-value pair from the map
// fruitMap.delete('a');

// // Iterating over the map using entries
// console.log('Fruits in the map:');
// fruitMap.forEach((value, key) => {
//   console.log(`${key}: ${value}`);
// });


// Function to count the frequency of elements in an array using a Map
function countElementFrequency(arr) {
    const frequencyMap = new Map();
    arr.forEach(element => {
      frequencyMap.set(element, (frequencyMap.get(element) || 0) + 1);
    });
    return frequencyMap;
  }
  
  // Sample array with elements
  
  const vehicles = ['car', 'truck', 'car', 'bike', 'car', 'bike', 'truck'];
 
  // Calling the countElementFrequency function
const frequencyMap = countElementFrequency(vehicles);

// Logging the content of the frequencyMap
console.log('Frequency Map:');
frequencyMap.forEach((count, element) => {
  console.log(`${element}: ${count} time(s)`);
});




  // Call the function to count element frequency
  const elementFrequency = countElementFrequency(vehicles);
  elementFrequency.forEach((count, element) => {
    console.log(`${element}: ${count} time(s)`);
  });
  