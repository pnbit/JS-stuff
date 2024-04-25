//IF statment = if a condition is true, execute some code 
//                          if not, do something else

let amzius = 101

//when you have only IF statment that is false and will skip it and do nothong 
if (amzius >= 18){
    console.log("Enter")
}                   
// else {
//     console.log("Stop")
// }

//you would have to add else to handle IF statment is false 

let boolean = false

if(boolean){
    console.log("true")
}
else{
    console.log("false")
}

//nested if statment


let turiTeises = false

if(amzius >= 18){

    console.log("Tu pakankamai suauges turetis teises")

        if(turiTeises){
            console.log("Tu jau turi teises")
        }
        else{
            console.log("tu dar neturi teisiu ")
        }
    }
    else{
        console.log("dar per jaunas")
}

//else if


if(amzius >= 100){
   console.log('You are TOO OLD to enter this site')
}
else if(amzius == 0){
    console.log("You can't enter. You were just born.")
}
else if(amzius >= 18){
    console.log("You are old enough to enter this site")
}
else if(amzius < 0){
    console.log("Your age can't be below 0")
}
else{
    console.log("You must be 18+ to enter this site")
}

