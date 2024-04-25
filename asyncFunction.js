// Async/Await = Async = makes a function return a promise
//                           Await = makes an async function wait for a promise

// Allows you write asynchronous code in a synchronous manner
// Async doesn't have resolve or reject set up as parameters
// Everything after Await is placed in an event queue

function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogWalked = true;

            if(dogWalked){
                resolve("You walk the dog ");
            }
            else{
                reject("You DIDN'T walk the dog");
            }
        }, 1500);
    });
}

function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            const kitchenCleaned = true;

            if(kitchenCleaned){
                resolve("You clean the kitchen ");
            }
            else{
                reject("You DIDN'T clean the kitchen");
            }
        }, 2500);
    });
}

function takeOutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const trashTakenOut = true;

            if(trashTakenOut){
                resolve("You take out the trash ");
            }
            else{
                reject("You DIDN'T take out the trash");
            }

        }, 500);
    });
}

async function doChores(){

    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);
    
        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);
    
        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);
        
        console.log("You finsihed all the chores!");
    }
    catch(error){
        console.error(error);
    }
}

doChores();

// // /////////////////////////////

// // Function that returns a Promise to simulate an asynchronous operation
// function performAsyncOperation() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const randomNumber = Math.floor(Math.random() * 10);
//         if (randomNumber < 5) {
//           resolve(randomNumber); // Resolve the Promise with the generated random number
//         } else {
//           reject('Error: Random number is greater than or equal to 5'); // Reject the Promise with an error message
//         }
//       }, 2000); // Simulate a delay of 2 seconds
//     });
//   }
  

// Async function that calls performAsyncOperation and handles the Promise using async/await
async function fetchData() {
    try {
      console.log('Fetching data...');
      const result = await performAsyncOperation();
      console.log('Async operation successful. Random number:', result);
    } catch (error) {
      console.log('Async operation failed:', error);
    }
    console.log('End of async function');
  }
  
  // Wrapping the async function in a try-catch block
  try {
    console.log('Start of the script');
    fetchData();
  } catch (error) {
    console.log('Error in script:', error);
  }
  console.log('End of the script');
  
  