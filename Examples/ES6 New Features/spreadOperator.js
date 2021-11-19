// Spread Operator


// spread operator for return each singular data
let arr = [1, 2, 3, 4, 5]

console.log(...arr) // return singular data from a array


// spread operator is perfect and easy solution for create new object 
let obj = {
  a: 100,
  b: 200,
  c: 300
}



// this way is not solution for create the new object. it's just reference parse
// we want to change here only newObbj1 but they both changes. reason is object mutable
let newObj1 = obj

newObj1.a = 10

console.log(newObj1)
console.log(obj === newObj1) // true

// so we use a deference way for this problem solved
let newObj2 = Object.create(obj)
newObj2.a = 100
console.log(newObj2)
console.log(obj === newObj2) // false




// but batter way is now use the Spread Operator 
let newObj3 = {
  ...obj // return new object
}

console.log(newObj3)
console.log(obj === newObj3) // false