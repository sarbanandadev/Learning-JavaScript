// Logical AND and OR Operator Shorthand

var name = ''
var getName = ''

// if (name.length === 0) {
//     console.log(getName = 'SarbaNanda')
// } else {
//     console.log(getName = name)
// }

// Shorthand 
var getName = name || 'SarbaNanda'
console.log(getName)


var isTrue = true
var isFalse = false

// if (isTrue) {
//     console.log('Everything is Right')
// }

// Shorthand 
isTrue && console.log('Everything is Right')