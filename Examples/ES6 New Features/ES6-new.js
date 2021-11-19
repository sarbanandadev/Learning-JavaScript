let name = 'SarbaNanda'
let age = 25

// template string
console.log(`My name is ${name}. I am ${age} years old. So I am ${age < 18 ? 'not Adult.' : 'Adult.' }`)

// padStart()
console.log(name.padStart(25, '*'))

// padEnd()
console.log(name.padEnd(25, '*'))

// repeat()
console.log('*'.repeat(25))


// Arrow Function

//normal arrow function
let arrow1 = (a, b) => {
  let name1 = 'SarbaNanda'
  let name2 = 'ChidaNanda'
  return `${name1} is ${a} and ${name2} is ${b}.\n${name1} is ${a < 18 ? 'not adult.' : 'adult'} and ${name2} is ${b < 18 ? 'not adult.' : 'adult'}.`
}
console.log(arrow1(25, 17))

//multi parameters arrow function (fat arrow function)
let arrow2 = (a, b) => a + b
console.log(arrow2(50, 45))

//single parameter arrow function
let arrow3 = x => x + x
console.log(arrow3(50))


// arrow function is always referred to his parent's this, 
// not aplicable with bind(), call(), Apply() methods
let obj = {
  name: 'SarbaNanda',
  print: function() {
    setTimeout(() => {
      console.log(`Hello, I am ${this.name}.`)
    }, 1000)
  }
}
obj.print()


// Default Parameter 
function sqr(n = 1) {
  return n * n
}
console.log(sqr())

// Don't Aplicable null or undefine if you use default parameter
function great(name = 'SarbaNanda', msg = 'Hello') {
  console.log(`${msg}! ${name}`)
}
great(null, 'Hello')


// rest operator 
function sum(...rest) {
  return rest.reduce((a, b) => a + b)
}
console.log(sum(1, 2, 3, 4, 5))

// spread operator for array
let arr = [1, 2, 3, 4, 5]
console.log(...arr) // return singular data from array
/*
// spread operator for object 
let obj = {
    a: 100,
    b: 200,
    c: 300
}
let obj2 = {
    ...obj // return new object
}
console.log(obj2)
*/

// Enhance Object
let a = 100,
  b = 200

let obj3 = {
  a,
  b,
  print() {
    console.log(this)
  }
}
obj3.print()

// Destructaring 

// object 
let person = {
  pname: 'SarbaNanda',
  pemail: 'sarbananda@gmail.com',
  paddress: {
    pcity: 'Rangamati',
    pcounty: 'Bangladesh'
  }
}
let { pname, pemail, paddress: { pcity, pcounty } } = person
console.log(pname, pemail, pcity, pcounty)

// array
let arr3 = [1, 2, 3, 4, 5]
let [first, second, , , last] = arr3
console.log(first, second, last)

// fromEntries method 
let obj4 = {
  a: 100,
  b: 200,
  c: 300
}
console.log(Object.entries(obj4)) // object to array convert 

let arr4 = [
    ['a', 100],
    ['b', 200],
    ['c', 300]
]
console.log(Object.fromEntries(arr4))

// Symbol: return the unic symbol value
let s1 = Symbol('first')
let s2 = Symbol('second')
console.log(s1, s2)
let toss = {
  HEAD: Symbol('HEAD'),
  TAIL: Symbol('TAIL')
}
console.log(toss.HEAD === toss.TAIL)