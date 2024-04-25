// String interpolation
// Without template literals, when you want to combine output from expressions with strings,
//  you'd concatenate them using the addition operator +:
// That can be hard to read – especially when you have multiple expressions.
// With template literals, you can avoid the concatenation operator — 
// and improve the readability of your code — 
// by using placeholders of the form ${expression} to perform substitutions 
// for embedded expressions:


const name = 'John Doe'
const age = 20

// Using arithemtics to inclode variable in strings
console.log("My name is" + name + "and I'm" + age + "years old.")


// Using template literals for string interpolation
console.log(`My name is ${name} and I'm ${age} years old.`)

// you have to use backticks for this `` 

