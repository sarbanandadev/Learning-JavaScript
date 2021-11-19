// Property Descriptor 

var person = {
    name: 'SarbaNanda'
}

// console.log(person)

// console.log(person.toString()) // it's working


// for (var i in person) {
//     console.log(i) // name property in String
// }

// console.log(Object.keys(person)) // name property in Array


// var descriptor = Object.getOwnPropertyDescriptor(person, 'name')
// console.log(descriptor) // get descriptor 

// Descriptor properties:
// writable: true (changeable or not changeable)
// enumerable: true (visible or invisible)
// configurable: true (removable or non removable) 


// Get toString Descriptor 

var baseObj = Object.getPrototypeOf(person)

// console.log(baseObj) // Object

// var descriptor = Object.getOwnPropertyDescriptor(baseObj, 'toString')
// console.log(descriptor)

Object.defineProperty(person, 'name', {
    enumerable: false,
    writable: false,
    configurable: false,
    value:'SarbaNanda Dev'
})

console.log(person)  // person Object ― Object 

console.log(Object.keys(person)) // empty Array ― Array ― Object

for (var i in person) {
    console.log(i) // unrefined ― enumerable is false that why undefined 
}

person.name = 'SarbaNanda Chakma'
console.log(person) // not change ― reason is writable false 

delete person.name
console.log(person) // not remove ― reason is configurable false 