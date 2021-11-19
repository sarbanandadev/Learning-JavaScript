// Instance vs Prototype Members


// // instance members / instance properties 
// function Square(width) {
//     this.width = width
// }

// // prototype members / prototype properties 
// Square.prototype = {
//     draw: function() {
//         console.log('I am Draw')
//     },
//     toString : function() {
//         return 'My width is ' + this.width
//     }
// }

// var sqr1 = new Square(10)
// var sqr2 = new Square(5)

// console.log(sqr1)
// console.log(sqr2)

// console.log(sqr1.draw)
// console.log(sqr2.draw)

// console.log(sqr1.toString())
// console.log(sqr2.toString())





// How to Used Instance and Prototype Members

function Square(width) {
    this.width = width

    this.getWidth = function() {
        console.log('Width is ' + this.width)
        // this.draw()
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

// console.log(sqr1.getWidth())

console.log(sqr1.draw())
console.log(sqr2.draw())


console.log(sqr1)
console.log(sqr2)