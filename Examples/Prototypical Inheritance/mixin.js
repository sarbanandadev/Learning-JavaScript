// When used Inheritance


// Inheritance and Composition Mixin

function Mixin(target, ...sources) {
    Object.assign(target, ...sources)
}

var canWalk = {
    walk: function() {
        return 'Walking...'
    },
}

var canEat = {
    eat: function() {
        return 'Eating...'
    },
}

var canSwim = {
    swim: function() {
        return 'Swiming...'
    }
}

// assign Method provided by JavaScript from ES6
// var person = Object.assign({}, canWalk, canEat)
// person.name = 'SarbaNanda'
// console.log(person) // person inherit walk and eat method
// console.log(person.name + ' ' + person.eat())

function Persons(name) {
    this.name = name
}
// Object.assign(Person.prototype, canWalk, canEat)
Mixin(Persons.prototype, canWalk, canEat)

var person = new Persons('SarbaNanda')
console.log(person)


function Fishes(name) {
    this.name = name
}
Mixin(Fishes.prototype, canEat, canSwim)
var fish = new Fishes ('Gold Fish')

console.log(fish)