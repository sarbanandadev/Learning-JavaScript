// Object Literal in JavaScript 

var rect = {
    // declaration properties 
    width: 100,
    height: 50,
    
    // declaration method of anonymous function 
    draw: function () {
        // Executive code
        console.log('I am a Rectangle')
        // console.log('My width is ' + width) // width is not defined
        
        console.log('My width is ' + this.width) // working perfectly 
        console.log('My height is ' + this.height)
    }
}

// call draw method of anonymous function 
rect.draw()

rect.height = 100 // change of properties value

rect.draw()