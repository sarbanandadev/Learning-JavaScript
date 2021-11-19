function Shape() {
    
}

Shape.prototype = {
    common: function() {
        console.log('I am Common Method')
    }
}

function Square(width) {
    this.width = width
}

Square.prototype = Object.create(Shape.prototype)

Square.prototype.draw = function() {
    console.log('I am Drawing Method')
}


var shape = new Shape()
var sqr = new Square(45)

console.log(shape) // shape ― Shape ― Object
console.log(sqr) // sqr ― Square ― Object



// We need: sqr ― Square ― Shape ― Object
console.log(shape)
console.log(sqr)

console.log(sqr.common())



// Inherit for Circle 
function Circle() {
    
}

Circle.prototype = Object.create(Shape.prototype)

var circle = new Circle()

console.log(circle)
console.log(circle.common())