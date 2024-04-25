// while loop = repeat some code WHILE some condition is true. 
//when You enter the loop you have to have a way to exit it 
//otherwise you will get infinite loop

//while loop will go on as the condition will be met. 
// while (condition) { // as log as this is tru it will go for ever BE CAREFUL
//   code block to be executed
// }

let text = "";
let i = 0;
while (i < 10) {
  text += " The number is " + i;
  i++;
}
console.log(text)