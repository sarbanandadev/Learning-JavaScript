// Prototypical Inheritance 
// Classical  Inheritance




// Prototypical Inheritance 

var obj = {}
console.log(obj)

var obj2 = new Object()
console.log(obj2)

// depicate proto not used this proto
console.log(obj.__proto__ === obj2.__proto__) // true

// 2nd way of get prototype 
console.log(Object.getPrototypeOf(obj)) // return same prototype 

console.log(Object.getPrototypeOf(obj) === Object.getPrototypeOf(obj2)) // true 




// Multi level Inheritance 

var arr = []
console.log(arr) // arr ― Array ― Object 


var str = new String('String')
console.log(str) // str ― String ― Object 


function Person(name) {
    this.name = name
}
var p1 = new Person('SarbaNanda')
console.log(p1) // p1 ― Person ― Object