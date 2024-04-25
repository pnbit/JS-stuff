// // Creating an array with numbers
// const numbers = [1, 2, 3, 4, 5];

// // Accessing elements of the array
// console.log(numbers[0]); // Output: 1
// console.log(numbers[2]); // Output: 3

// // Adding an element to the array
// numbers.push(6);
// //console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]

// // Looping through the array
// for (let number of numbers) {
//   console.log(number);
// }


// Function that calculates the sum of an array of numbers
function sumArray(numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

// Array of numbers
const numbers = [1, 2, 3, 4, 5];

// Call the function with the array and log the result
const result = sumArray(numbers);
console.log(result); // Output: 15 (1 + 2 + 3 + 4 + 5 = 15)


//quiz

// Function to remove duplicates from an array using a Set
function removeDuplicatesFromArray(arr) {
    return [...new Set(arr)];
  }
  
  // Sample array with duplicates
  const numbersArray = [1, 2, 2, 3, 4, 4, 5];
  
  // Call the function to remove duplicates
  const uniqueNumbers = removeDuplicatesFromArray(numbersArray);
  console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]