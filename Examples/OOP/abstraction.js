// Abstraction in JavaScript



// Private Properties

var Rectangle = function(width, height) {
    // declared local variable, it's a private
    // var name = 'SarbaNanda'

    this.width = width
    this.height = height

    var position = {
        x: 56,
        y: -100
    }

    var printProperties = function() {
        console.log('My width is ' + this.width)
        console.log('My height is ' + this.height)
    }.bind(this) // if not bind object it's return undefined 

    // 1st way of getter
    // this.getPosition = function() {
    //     return position
    // }

    this.draw = function() {
        console.log('I am a Rectangle')
        printProperties()
        console.log('Position: X=' + position.x + ' Y=' + position.y)
    }

    // 2nd way of Getter
    Object.defineProperty(this, 'position', {
        get: function() {
            return position
        },
        set: function(value) {
            position = value
        }
    })
}

var rect = new Rectangle(45, 30)

rect.draw()

// console.log(rect.name) // undefined 



// Getter & Setter

// 1st way 
// console.log(rect.getPosition())

// 2nd way 
rect.position = { // Set value
    x: 456,
    y: -123
}
console.log(rect.position) // Get value 