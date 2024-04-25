function outerFunction(){
    let outerVariable = 'I am defined in the outer function'

    function innerFunction(){
        console.log(outerVariable)
    }

return innerFunction

}

const myClosure = outerFunction()

console.log(myClosure())


//quiz