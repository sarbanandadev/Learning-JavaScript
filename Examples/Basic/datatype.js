/* 
DataType for JavaScript 

1. Primitive DataType: 
1.1 — Number (any number: 10, 3.5, 5.12)
1.2 — String/Text ('This is a text', "This is also text", `This is more text`)
1.3 — Boolean (true/false)
1.4 — undefined 
1.5 — null (absence of a value)

2. Object DataType (3)
— Array
— Object 
— Function 

*/

//********* NUMBERS *********
// //literal 
// var n = 103
// var f = 300.525
// //constructor 
// console.log(Number.parseFloat(n))
// console.log(Number.parseInt(f))
// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Number.MIN_SAFE_INTEGER)
// console.log(1 / 0)
// console.log('String' * 10)


//********* STRING *********
// //literal 
// var str1 = 'Single Qoute String'
// var str2 = "Double Qoute String"
// var str3 = `Backkit Template String`
// //constructor 
// var str4 = String('String constructor')
// var str5 = String(245)
// var str6 = String(256.477)

// console.log(str1, str2, str3)
// console.log(str4, str5, str6)


//********* BOOLEAN *********
// //literal 
// var b1 = true
// var b2 = false
// //constructor 
// var b3 = Boolean(true)
// var b4 = Boolean(false)
// console.log(b3, b4)


//********* Null v Undefined *********
// A Variable without Value Always Store Undefined. 
// A Variable with Unknown Value can Store Null. 
// Null is a Special Type Used as a Absence of an Object. 

var abc
var xyz = null

console.log(abc, xyz)


var hex = 0xff
console.log(hex)

var oct = 0756
console.log(oct)