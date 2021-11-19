// Understanding Bind, Call and Apply

function myFunc(c, d) {
    console.log(this)
    // console.log(this.a + this.b)
    console.log(this.a + this.b + c + d)
}

// myFunc() // Window


// Call and Apply Method

// myFunc.call({}) // empty object
// myFunc.apply({}) // empty object

// myFunc.call({ a: 40, b: 25 }) // this object properties and values 
// myFunc.call({ a: 400, b: 250 }) // this object properties and values 

// myFunc.call({ a: 40, b: 25 }, 10, 5) // everything is working perfectly 
// myFunc.apply({ a: 400, b: 250 }, 10, 5) // error: CreateListFromArrayLike called on non-object

// myFunc.apply({ a: 400, b: 250 }, [10, 5]) // everything is working perfectly 




// Bind Method

// testBind = myFunc.bind({ a: 7, b: 3 }, 5, 5) // only bind not call

var testBind = myFunc.bind({ a: 7, b: 3 }, 5, 5)
testBind()

var testBind = myFunc.bind({ a: 7, b: 3 })
testBind(5, 7)