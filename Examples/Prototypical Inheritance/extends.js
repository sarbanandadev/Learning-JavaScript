// Avoid the code duplicate using Extends Function 


// Create Extends Function with common codes
function Extend(Parent, Child) {
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child
}

// Parent Class for Extends Function
function Shape(color) {
    this.color = color
}

// Add Parent prototype Method
Shape.prototype.parent = function() {
    console.log('I am Parent Method')
}

// Child Class for Square Object
function Square(width, color) {
    Shape.call(this, color)
    this.width = width
}

// Child Class for Circle Object
function Circle(radius, color) {
    Shape.call(this, color)
    this.radius = radius
}

// invoke the Extends Class with Parent and Child
Extend(Shape, Square)
Extend(Shape, Circle)

// Add Child prototype Method
Square.prototype.child = function() {
    console.log('I am Child Method')
}

// Create new Object using Child Class
var square = new Square(45, 'green')
var circle = new Circle(10, 'red')

console.log(square)
console.log(circle)