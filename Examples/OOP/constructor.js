// Create Class Using Constructor Pattern 


// maintain always naming convention ― 
// The first letter will always be uppercase letters 

// Declare properties without comma (,) and object syntax (:), Use instead equal syntax 
// And used this keyword necessary with dot at first of properties 

var Rectangle = function(width, height) {
    this.width = width
    this.height = height

    this.draw = function() {
        console.log('I am a Rectangle')
        this.printProperties()
        console.log(this)
    }
    this.printProperties = function() {
        console.log('My width is ' + this.width)
        console.log('My height is ' + this.height)
    }
}

// var rect1 = Rectangle() // Cannot read property 'draw' of undefined

// Used new keyword necessary in Cinstructor Pattern
// new keyword is create a new empathy object
var rect1 = new Rectangle(15, 10) // everything is working correctly 

rect1.draw()