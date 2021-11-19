// Function Execution

abc()

function abc() {
    console.log('I am Function')
}

abc()


// Creational Phase 
// abc = ref

// Executional Phase
// ref cal and execute code maintain scope chain




// Declaration vs Expression 
// difference: declaration is function keyword and expression is var keyword 
// problem is hoisting

declaration()

function declaration() {
    console.log('I am a Function Declaration')
}

// expression() // error it is undefined 

var expression = function () {
    console.log('I am a Function Expression')
}

expression() // undefined replaced by ref

// Creational Phase
// declaration = ref
// expression = undefined

// Executional Phase

