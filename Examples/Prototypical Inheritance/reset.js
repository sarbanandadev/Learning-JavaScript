// Reset Constructor After Inheritance


function Shape() {

}

// defined the dot notation every properties 
Shape.prototype.common = function() {
    console.log('I am Common Method')
}

function Square(width) {
    this.width = width
}

// essay way: when reset the prototype must need with reset constructor 
Square.prototype = Object.create(Shape.prototype) // reset prototype 
Square.prototype.constructor = Square // reset Constructor

Square.prototype.draw = function() {
    console.log('I am Drawing Method')
}

// if you declarer object prototype cannot the inheritance or
// reset the before inheritance or that was inheritance would become as before.
// Square.prototype = {
//     test: function() {

//     }
// }

var shape = new Shape()
var sqr = new Square(45)

console.log(sqr)

console.log(shape)

// 2nd way of create new Shape object using constructor method 
var newShape = new Shape.prototype.constructor()
console.log(newShape)


console.log(sqr) // default 
// create new Square Object using constructor
// but it's a odd way of create new object
var newSquare = new Square.prototype.constructor(50)
console.log(newSquare)

