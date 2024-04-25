// RANDOM NUMBER GENERATOR

randomNum = Math.random() 
console.log(randomNum)
    
// randomNuum1 = Math.round(Math.random())
// console.log(randomNuum1)
    
randomNum = Math.round(Math.random() * 3)
console.log(randomNum)

//as in computer terms we count from 0 to infinity, 
//to have the right number we juct need to add extra number like +1 

randomNum1 = Math.round(Math.random() * 3)+1
console.log(randomNum1)

//if we need random number in certain range 
const min = 1;
const max = 10;

randomNum2 = Math.floor(Math.random() * (max - min)) + min 
console.log(randomNum2)
    