// Cnostructor Prototype of any Object


function Person(name) {
    this.name = name
}

Person.prototype.PI = 3.3416

var p1 = new Person('SarbaNanda')
var p2 = new Person('Chakma')

// 1st way of get prototype 
// console.log(Object.getPrototypeOf(p1)) // p1 ― Person ― Object 

// 2nd way of get prototype using 
// console.log(Person.prototype)

// console.log(Object.getPrototypeOf(p1) === Person.prototype) // true 

// inherit from base prototype object
console.log(p1)
console.log(p2)

// set my method in base prototype
// var a = {}
// console.log(a)

var arr = []
console.log(arr)

Array.prototype.myMethod = function() {}

var another = []
console.log(another) // inherit myMethod from base prototype 