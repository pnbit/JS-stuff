//here we have object that utilese this keyword in obeject method
const person = {
    name: 'Paulius',
    greet: function(){
        console.log('Sveiki, mano vardas ' + this.name)
    }
}

person.greet()


//constructor function

function persona(name) {
    this.name = name
    this.intro = function (){
        console.log('Sveiki, mano vardas ' + this.name)
    }
}

const petras = new persona('Petras')
petras.intro()

