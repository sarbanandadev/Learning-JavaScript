// Pass by Value vs Pass by ReferenceError
// or
// Call by Value vs Call by ReferenceError



// Pass by Value
// Function body is cannot change if declared the outside values for primitive data 

var n = 10

function change(n) {
    n = n + 100
    console.log(n) // 110 // change 
}

change(n)

console.log(n) // 10 // not chang




// Pass by Reference 
// Object is Mutable, that why could change any values

var obj = {
    a: 10,
    b: 20
}

function changeMe(obj) {
    obj.a = obj.a + 100
    obj.b = obj.b + 100
    console.log(obj) // change
}

changeMe(obj)
console.log(obj) // change