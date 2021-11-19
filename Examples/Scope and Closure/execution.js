// Execution Context

function a() {
    b()
    console.log('I am Function A') //4th
}

function b() {
    d()
    console.log('I am Function B') // 3rd
}

function c() {
    console.log('I am Function C') // 1st
}

function d() {
    c()
    console.log('I am Function D') // 2nd
}

var x = 100

a()

console.log('I am Global') // 5th


// Stack of Data Structure 
// Last in First out


//  Execution Context:
//      1st Creational Phase: 
//          ― finding Declaration and storing References: Find where are the variables decline and where the function has been declared, and collect reference then stored in global object.
//          ― And in here making a Scope chain relationship. 
//      2nd Executional Phase
//          ― Skiped the Declaration of variables and function 
//          ― 