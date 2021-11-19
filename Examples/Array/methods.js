// Array Methods 

var arr = [4, 5, 9, 6]
var arr2 = [5, 7, 2, 8]

console.log(arr)

console.log(arr.join(' '))
console.log(arr.join(', '))
console.log(arr.join(' | '))

// console.log(arr.fill(0))
// console.log(arr.fill(true))

console.log(arr.concat(arr2))

var arr3 = arr.concat(arr2)
console.log(arr3)

console.log(Array.from(arr))

var arr4 = Array.from(arr)
console.log(arr4)

console.log(Array.isArray(arr)) // true



// Mutable Array

var a = [1, 2, 3]
var b = a
var c = Array.from(a)

// b[0] = 5
c[0] = 5

console.log(a)