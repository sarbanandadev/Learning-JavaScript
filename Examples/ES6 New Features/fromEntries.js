// fromEntries method 

let obj = {
  a: 100,
  b: 200,
  c: 300
}

// convert object to array
console.log(Object.entries(obj))


// convert array to object using fromEntries
let objArr = [
  ['a', 100],
  ['b', 200],
  ['c', 300]
]

console.log(Object.fromEntries(objArr))