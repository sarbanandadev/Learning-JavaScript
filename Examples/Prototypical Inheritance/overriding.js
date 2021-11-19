// Method Overriding in JavaScript 


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

function Circle(radius, color) {
    Shape.call(this, color)
    this.radius = radius
}

Extend(Shape, Square)
Extend(Shape, Circle)

// Override Base/Shape parent Method
Circle.prototype.parent = function() {
    Shape.prototype.parent.call(this) // call from Shape/Base prototype Method  
    console.log('I am Parent Method and I have Overridden by Circle')
}

var square = new Square(10, 'red')
var circle = new Circle(20, 'green')


console.log(circle.parent()) // override circle parent Method

console.log(square.parent()) // Not change square parent Method