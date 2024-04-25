// // const promise = new Promise(
// //     (resolve, reject)=> {

// //         //do somthing asynchronus here

// //         if (greatSuccess) {
// //             resolve('success') //it will resolve with some data
// //         } else {
// //             reject('failure') //if something goes wrong promise can reject, to raise an error
// //         }
// //     }
// // )

// Function that returns a Promise to simulate an asynchronous operation
function performAsyncOperation() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 10);
        if (randomNumber < 5) {
          resolve(randomNumber); // Resolve the Promise with the generated random number
        } else {
          reject('Error: Random number is greater than or equal to 5'); // Reject the Promise with an error message
        }
      }, 2000); // Simulate a delay of 2 seconds
    });
  }
  console.log(performAsyncOperation())


// // // consumer of the promise can use methods to handle those to possible outcomes

// // promise
// //  .then(success => {
// //      console.log('yes', success)
// // })
// //  .catch(err => { 
// //     console.log('oops', err)
// //  })

//  // Promise = An Object that manages asynchronous operations.
// //                    Wrap a Promise Object around {asynchronous code}
// //                    "I promise to return a value"
// //                    PENDING -> RESOLVED or REJECTED
// //                   new Promise((resolve, reject) => {asynchronous code})

// // DO THESE CHORES IN ORDER

// // 1. WALK THE DOG
// // 2. CLEAN THE KITCHEN
// // 3. TAKE OUT THE TRASH

// function walkDog(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             const dogWalked = true;

//             if(dogWalked){
//                 resolve("You walk the dog ");
//             }
//             else{
//                 reject("You DIDN'T walk the dog");
//             }
//         }, 1500);
//     });
// }

// function cleanKitchen(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
            
//             const kitchenCleaned = true;

//             if(kitchenCleaned){
//                 resolve("You clean the kitchen ");
//             }
//             else{
//                 reject("You DIDN'T clean the kitchen");
//             }
//         }, 2500);
//     });
// }

// function takeOutTrash(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             const trashTakenOut = true;

//             if(trashTakenOut){
//                 resolve("You take out the trash ");
//             }
//             else{
//                 reject("You DIDN'T take out the trash");
//             }

//         }, 500);
//     });
// }

// walkDog().then(value => {console.log(value); return cleanKitchen()})
//                   .then(value => {console.log(value); return takeOutTrash()})
//                   .then(value => {console.log(value); console.log("You finished all the chores!")})
//                   .catch(error => console.error(error));