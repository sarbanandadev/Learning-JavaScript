// Able to remember and access it's lexical scope

// function test() {
//     var msg = 'I am learning Lexical Scope and Closure'

//     function sayMsg() {
//         console.log(msg)
//     }

//     sayMsg()
// }

// test()



// when that funtion executing outside it's lexical scope 

// function test() {
//     var msg = 'I am learning Lexical Scope and Closure'

//     return function () {
//         console.log(msg)
//     }
// }

// var sayMsg = test()

// sayMsg()




// How to Used Closure and Scope

// problem in For Loop
for (var i = 1; i <= 5; i++) {
        setTimeout(function() {
            console.log(i) // it's doesn't working, 6 is repeatedly 
        }, 1000 * i)
}

// solution in For loop ― it's just trick
for (var i = 1; i <= 5; i++) {
    // iif
    (function(n) {
        setTimeout(function() {
            console.log(n) // it's working prefectly, 1-5
        }, 1000 * n)
    })(i)
}
