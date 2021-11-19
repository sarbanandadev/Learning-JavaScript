function myFunc() {
    console.log(this) // invalid this 

}

// myFunc() // invalid this is associate at window object if only called. 

new myFunc() // return empathy object





var rect = {
    width: 100,
    height: 50,

    draw: function() {
        console.log('I am a Rectangle')

        // call without this keyword 
        // printProperties() // printProperties is not defined

        // call with this keyword 
        this.printProperties() // called this object properties 
        console.log(this) // return this all rect object 
    },
    printProperties: function() {
        console.log('My width is ' + this.width)
        console.log('My height is ' + this.height)
    },
}

rect.draw()



var another = {
    width: 45,
    height: 55,
    print: rect.printProperties // just called another object properties 
}

console.log(another.print) // return rect object properties value
another.print() // it's working perfectly 