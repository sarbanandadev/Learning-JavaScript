// Polymorphism in JavaScript 


function Extend(Parent, Child) {
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child
}

function Shape(color) {
    this.color = color
}

Shape.prototype.parent = function() {
    console.log('I am Parent Method')
}

function Square(width, color) {
    Shape.call(this, color)
    this.width = width
}

Extend(Shape, Square)

Square.prototype.parent = function() {
    console.log('I am Parent Method and I have Overridden by Circle')
}


Extend(Shape, Circle)

function Circle(radius, color) {
    Shape.call(this, color)
    this.radius = radius
}


// Override Base/Shape parent Method
Circle.prototype.parent = function() {
    console.log('I am Parent Method and I have Overridden by Square')
}

var square = new Square(10, 'red')
var circle = new Circle(20, 'green')


var shape = new Shape('bule')

// console.log(shape.parent())
// console.log(circle.parent())
// console.log(square.parent())



var shapes = [shape, circle, square]
for (var i of shapes) {
    i.parent()
}

var a = {}

console.log(a instanceof Circle) // false
console.log(a instanceof Object) // true

console.log(circle instanceof Circle) // true
console.log(circle instanceof Shape) // true
console.log(circle instanceof Square) // false


console.log(square instanceof Square) // true
console.log(square instanceof Shape) // true