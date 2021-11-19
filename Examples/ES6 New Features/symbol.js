// Symbol in JavaScript 


// symbol is return the unic symbol value
let sym1 = Symbol() // without description 
let sym2 = Symbol('symbol') // use description

console.log(sym1, sym2)
console.log(sym1 === sym2) // false



// The use of symbol in javascript
let toss = {
  head: Symbol('HEAD'),
  tail: Symbol('TAIL')
}

console.log(toss)
console.log(toss.head, toss.tail)
console.log(toss.head === toss.tail) // false