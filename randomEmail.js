// RANDOM GENERATOR

function generateEmail(length, includeLowercase, includeUppercase, includeNumbers){
// first we declare variables
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
//create variables
    let allowedChars = "";
    let email = "";
//create logic 
    allowedChars += includeLowercase ? lowercaseChars : "";  // += performs addition ? check if it is true or false
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
// to check this lets console.log(allowedChars). we should have one big string

//lets add if statment to check that option are selected 
    if(length <= 0){
        return `(email length must be at least 1)`;
    }
    if(allowedChars.length === 0){
        return `(At least 1 set of character needs to be selected)`;
    }
//lets do for loop to select random charackter from all the availible posibilities
    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        //we will use string addition to randommly chosen char from our string of allowed chars
        email += allowedChars[randomIndex];
    }

    return email;
}

//we passing options when we generate our email
const emailNameLength = 0
const includeLowercase = false
const includeUppercase = false
const includeNumbers = false

const email = generateEmail(emailNameLength, 
                                 includeLowercase, 
                                 includeUppercase, 
                                 includeNumbers)

console.log(`Generated email: ${email}@bit.lt`)