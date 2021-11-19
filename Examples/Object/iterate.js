// Iterate Object / Travers of Object 

var obj = {
    x: 40,
    y: 60,
    z: 75
}

// console.log('x' in obj) // true
// console.log('p' in obj) // false

for (var i in obj) {
    // console.log(i)
    console.log(i + ': ' + obj[i])
}