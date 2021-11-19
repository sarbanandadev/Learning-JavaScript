// New Keyword in JavaScript 

// Mainly 3-4 work for new keyword 
// 1. create a Empaty Object 
// 2. Bind this Objects with Constructor Function 
// 3. Connected Prototypes copy to innered Empthy Object
// 4. At the end return the Object

// Normal Constructor 
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

// Implement New Method or Function 
function myNew(constructor) { // input constructor object in the from of argument
    // first needed empty object 
    var obj = {}
    
    // set object prototypes 
    Object.setPrototypeOf(obj, constructor.prototype)
    
    // set of Constructor with arguments, like a array data structure 
    var argsArray = Array.prototype.slice.apply(arguments)
    
    // Associate and Apply data with object 
    constructor.apply(obj, argsArray.slice(1))
    
    // return the object
    return obj
}

// make new obj with myNew Method without shorthand 
var rect1 = myNew(Rectangle, 45, 30)

rect1.draw()