// old way of string declaration and string concate
// var name = 'SarbaNanda'
// var age = 25
// console.log('My name is ' + name + '. I am ' + age + 'years old.')


// ES6 String Template
let name = `SarbaNanda`
let age = 25

// string concate using ES6 string template 
console.log(`My name is ${name}. I am ${age} years old.`)

// we can use single line statement in Carly Bracket 
console.log(`My name is ${name}. I am ${age} years old. I am ${age < 18 ? 'not Adult.' : 'Adult.'}`)