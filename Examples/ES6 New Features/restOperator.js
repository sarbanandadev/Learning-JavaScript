// Rest Operator


function sum() {
  let sum = 0

  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }

  return sum
}

console.log(sum(1, 2, 3, 4, 5)) // it's worked. but it's a long process for theses work. 



// we can just used rest operator from now solving theses problems
function sumRest(...rest) {
  console.log(rest) // return a Array
  return rest.reduce((a, b) => a + b) // summation of all arguments
}

console.log(sumRest(1, 2, 3, 4, 5)) // 15