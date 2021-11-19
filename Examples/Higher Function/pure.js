// What is Pure Function? 

//     * It Returns the some result if given the same arguments. 
//     * It dose not cause any observable side effects. 


// pure
function sqr(n) {
    return n * n
}

console.log(sqr(2))
console.log(sqr(2))
console.log(sqr(2))


// not pure
var n = 10

function change() {
    n = 100 // side effect 
}
change()
console.log(n)



var point = {
    x: 45,
    y: 30
}
// side effect 
function printPoint(point) {
    point.x = 100
    point.y = 200

    console.log(point)
}

printPoint(point)

console.log(point)