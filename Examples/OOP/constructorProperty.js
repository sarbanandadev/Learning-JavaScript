// Constructor Prpperty in any Object


// var createRect = function(width, height) {
//     return {
//         width: width,
//         height: height,

//         draw: function() {
//             console.log('I am a Rectangle')
//             this.printProperties()
//             console.log(this)
//         },
//         printProperties: function() {
//             console.log('My width is ' + this.width)
//             console.log('My height is ' + this.height)
//         }
//     }
// }

// var rect1 = createRect(10, 8)
// rect1.draw()




// var Rectangle = function(width, height) {
//     this.width = width
//     this.height = height

//     this.draw = function() {
//         console.log('I am a Rectangle')
//         this.printProperties()
//         console.log(this)
//     }
//     this.printProperties = function() {
//         console.log('My width is ' + this.width)
//         console.log('My height is ' + this.height)
//     }
// }

// var rect2 = new Rectangle(15, 10)
// rect2.draw()



// paste chrome console and see the difference in references 

// rect1.constructor // return only reference
// rect2.constructor // return full object reference 

// var obj = {}
// var obj = new Object() // call constructor




// proper way of constructor property

var str = new String('str') // call constructor

console.log(str)
console.log(str.constructor) // native code
console.log('My String is ' + str)
