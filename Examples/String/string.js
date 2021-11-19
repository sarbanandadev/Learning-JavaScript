// String in JavaScript 

// What is String? 
// 'String' "I am a String"
// ['s', 't', 'r', 'i', 'n', 'g']


// String Literal vs Constructor 

var str1 = 'String Literal'
console.log(str1)

var str2 = String('String Constructor')
console.log(str2)


// Number to String concretion using String Constructor 
var num = 10
// var str = num + '' // old solution
// var str = num.toString() // end solution 
var str = String(num) // 3rd solution 

console.log(str)


// Escape Notation 

// var str3 = 'This is a "String"'
// var str3 = "This is a 'String'"

var str3 = 'This is a \'String\''
console.log(str3)

var str4 = 'This is a \nString'
var str5 = 'This is a \tString'
var str6 = 'This is a \\String'

console.log(str4, str5, str6)


// String Comparison 

var a = 'abc'
var b = 'bcd'

// JavaScript Used Lexicographic System to Compare to String
console.log(a === b) // false
console.log(a > b) // false
console.log(a < b) // true

// Lexical Order — z, y, x, ..., a, Z, Y, X, ..., B, A
console.log('a' > 'z') // false

var c = 'aaaaZ'
var d = 'aaaaz'
console.log(c > d) // false

// convert number
console.log('001' == 1) // true


// String Methods
var a = 'I am'
var b = 'SarbaNanda'

var c = a.concat(' ', b)
console.log(c)

var d = c.substr(5, 10)
console.log(d)

console.log(c.charAt(5))

// console.log(c.startsWidth('I am'))
// console.log(c.endsWidth('SarbaNanda4699'))

console.log(c.toUpperCase())
console.log(c.toLowerCase())

console.log('         Space       ')
console.log('         Space       '.trim())

console.log(c.split(' '))



// String Length
var str7 = 'SarbaNanda is String'
console.log(str7.charAt(12)) // empty string 

var length = 0

while (true) {
    if (str7.charAt(length) === '') {
        break
    } else {
        length++
    }
}
console.log(length)
console.log(str7.length)
console.log('rizpuiezzozirzrhrutouuezez'.length)