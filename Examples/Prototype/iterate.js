// How to Iterate Over Object Properties 

function Square(width) {
    this.width = width

    this.getWidth = function() {
        console.log('Width is ' + this.width)
    }
}

Square.prototype = {
    draw: function() {
        this.getWidth()
        console.log('I am Draw')
    },
    toString: function() {
        return 'My width is ' + this.width
    }
}

var sqr1 = new Square(10)
var sqr2 = new Square(5)

// console.log(sqr1.hasOwnProperty('width')) // true
// console.log(sqr1.hasOwnProperty('getWidth')) // true
// console.log(sqr1.hasOwnProperty('draw')) // false


console.log(Object.keys(sqr1)) // return only instance properties 

for (var i in sqr1) {
    console.log(i) // return instance and prototype all properties 
}