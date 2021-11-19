// Calling Super with Call Method


function Shape(color) {
    this.color = color
}

Shape.prototype.common = function() {
    console.log('I am Common Method')
}

function Square(width, color) {
    // Shape(color) // not call color
    Shape.call(this, color) // super call
    this.width = width
}

Square.prototype = Object.create(Shape.prototype) // reset prototype 
Square.prototype.constructor = Square // reset Constructor

Square.prototype.draw = function() {
    console.log('I am Drawing Method')
}

var sqr = new Square(45, 'green')

// console.log(sqr) // cannot get color reason: color is refer window object
// console.log(window.color) // get color

console.log(sqr) // get color after super call