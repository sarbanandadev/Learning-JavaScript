// Scope in JavaScript 
// visible and invisible code


// Accessible Near value
var x = 50

function test() {
    // var x = 40
    // console.log(x) // accessible near x then another near x

    // Nested Scope
    function nested() {
        // var y = 60
        console.log(x) // parent scope x than global scope x
    }

    // console.log(y) // y is not defined
    nested()
}

test()




// lexical Scope
// tokenize / lexing




// Scope Chain

var a = 11

function A() {
    var b = 12

    function B() {
        var c = 23
        console.log(c)
    }

    function C() {
        var d = 56
        console.log(d)
    }
    console.log(b)
    D(b)
    B()
    C()
}

function D(n) {
    return n + a
}

// test and answer

// scope chains
// A ― a, b, B(), C(), D()
// B ― a, b, c, B(), C(), D()
// C ― a, b, d, B(), C(), D()
// D ― a, n, A()