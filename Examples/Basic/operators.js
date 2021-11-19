// Arithmetic Operators: + - * / % ++ --

var a = 10
var b = 3

// Modulus Operator 
console.log(a % b)

// Incremental Operators: Pre, Post
console.log(++a) // pre
console.log(a++) // post
console.log(a) // post after value


// Assignment Operator: += -= *= /= %=
var c = 30
var d = 40

c += d // a = a + b
console.log(c)

c -= d
console.log(c)

c *= d
console.log(c)

c /= d
console.log(c)

c %= d
console.log(c)


// Comparison Operators: 

var e = 10
var f = 20

console.log(e == f) // false
console.log(e !== f) // true

console.log(e > f) // false
console.log(e < f) // true

e = 20
console.log(e >= f) // false
console.log(e <= f) // true


var g = '50'
var h = 50

console.log(g == h) // true but not type equal 

console.log(g === h) // false value and type both macth
// console.log(g !=== h) // true // not support in this app


// Bitwise Operators: & 
// AND & 
// OR | 
// NOT ~
// Exorc ^
// LeftSift <<
// RightSift >>
// Type Of typeof
// Delete delete

console.log(typeof 'String')


// Logical Operators: 
// AND && 
// OR || 
// NOT ! 