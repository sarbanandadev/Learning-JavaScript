// simple version 
function add(a, b, c) {
    return a + b + c
}

// add(41, 52, 63) 


// Curring Version 
function curring(a) {
    return function(b) {
        return function(c) {
            return a + b + c
        }
    }
}

var result = curring(5)(10)(15)

console.log(result)