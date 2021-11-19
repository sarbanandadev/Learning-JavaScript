// Create Class Using Factory Pattern


// Using Object Literal 
// actually used making single object 
// var rect1 = {
//     width: 100,
//     height: 50,

//     draw: function() {
//         console.log('I am a Rectangle')
//         this.printProperties()
//         console.log(this)
//     },
//     printProperties: function() {
//         console.log('My width is ' + this.width)
//         console.log('My height is ' + this.height)
//     },
// }

// var rect2 = {
//     width: 10,
//     height: 5,

//     draw: function() {
//         console.log('I am a Rectangle')
//         this.printProperties()
//         console.log(this)
//     },
//     printProperties: function() {
//         console.log('My width is ' + this.width)
//         console.log('My height is ' + this.height)
//     },
// }

// var rect3 = {
//     width: 105,
//     height: 504,

//     draw: function() {
//         console.log('I am a Rectangle')
//         this.printProperties()
//         console.log(this)
//     },
//     printProperties: function() {
//         console.log('My width is ' + this.width)
//         console.log('My height is ' + this.height)
//     },
// }



// Using Factory Pattern 
// used making multiple objects using class 

var createRect = function(width, height) {
    return {
        width: width,
        height: height,

        draw: function() {
            console.log('I am a Rectangle')
            this.printProperties()
            console.log(this)
        },
        printProperties: function() {
            console.log('My width is ' + this.width)
            console.log('My height is ' + this.height)
        }
    }
}

// create multiple object by factory pattern without code duplicate 
var rect1 = createRect(10, 8)
rect1.draw()

var rect2 = createRect(40, 30)
rect2.draw()