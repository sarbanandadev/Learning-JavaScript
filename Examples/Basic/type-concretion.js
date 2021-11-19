var str = '9000'
var num = 90
var boo = true

//Constructors: String(), Number(), Boolean()

console.log(Number(str)) // return Number
console.log(Number.parseInt(str)) // return Number

console.log(num.toString()) // return String 

console.log(Number(Infinity)) // return Infinity 

console.log(boo.toString()) // return a String 


// Falsely Values: '', 0, NaN, null, undefined 
console.log(Boolean('')) // false
console.log(Boolean('String')) // true

console.log(Boolean(NaN)) // false
console.log(Boolean(null)) // false
console.log(Boolean(undefined)) // false

console.log(Boolean(0)) // false
console.log(Boolean(1678)) // true 

console.log(Boolean(Infinity)) // true 
console.log(Boolean(-Infinity)) // true 