//you can create with object literal sintax
const person = {
    name: 'vardenis',
    surname: 'pavardenis', 
    born: Date.now(),
    walk(){
        console.log('walking')
    }
}

//you can create one with object constructor
const human = new Object()

human.name = "Katins"
human.surname = "Margs"
human.greet = function() {
    console.log('Sveiki, mano vardas ' + this.name + ' o pavarde ' + this.surname)
}
console.log(human.name)
human.greet()

//quiz 