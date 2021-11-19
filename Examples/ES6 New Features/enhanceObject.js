// Enhance Object in JavaScript 



let a = 100,
  b = 200


let obj1 = {
  a: a,
  b: b,

  print: function() {
    console.log(this)
  }
}
obj1.print()



// shorthand 
let obj2 = {
  // when Variable and Value's name is the same, declare the name is only once 
  a,
  b,
  // do not need to function keyword declaration 
  print() {
    console.log(this)
  }
}
obj2.print()