// Default Parameter 

// undefined variable is always return unusable value
function sqr(n) {
  return n * n // undefined * undefined is not multiply 
}
console.log(sqr()) // so it's return NaN


// when we want return a by default value without unusable value or when we do not provided value, it's cannot that work 
// so when we needed set the default parameter. it's has two old solution ― 

// 1st solution is
function sqr1(n) {
  // we used the if condition 
  if (!n) {
    n = 1
  }
  return n * n
}
console.log(sqr1()) // return 1


// and 2nd solution is
function sqr2(n) {
  // we used the or operator (||)
  n = n || 1
  return n * n
}
console.log(sqr2()) // return 1



// but it's beautiful solution is we can use/provided the default parameter 
function sqr3(n = 1) {
  return n * n
}

console.log(sqr3()) // return 1
console.log(sqr3(25)) // return 625




// But it's don't Aplicable null or undefine if you use default parameter
function great(name = 'SarbaNanda', msg = 'Hello') {
  // console.log(name.length) // error: Cannot read property 'length' of null
  console.log(`${msg}! ${name}`)
}
great(null, 'Hello')