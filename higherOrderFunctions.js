//when another function is used as argument

function calculate(operation, a, b){
 return operation(a, b)
} 

function add(x, y){
    return x + y
}

function substract(x, y){
    return x - y 
}

calculate(add, 5, 5)

console.log(calculate(add, 5, 5))










//when another function isused as a return value

function linkejimuGeneratorius(linkejimai){
    return function(vardas){
        return linkejimai + ', ' + vardas + ' !'
    }   
}

const rytoPalikenjimas = linkejimuGeneratorius('Skanios kavos')

console.log(rytoPalikenjimas('Petras'))


//quiz