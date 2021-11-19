// Method of Object 

var obj = {
    x: 40,
    y: 60,
    z: 75
}

console.log(Object.keys(obj)) // properties 
console.log(Object.values(obj)) // values 

console.log(Object.entries(obj)) // Array properties and values 



// var obj2 = obj

// obj2.x = 70
// obj2.y = 100

// console.log(obj)
// console.log(obj2) 


var obj2 = Object.assign({}, obj) // create new object 

obj2.x = 100
obj2.y = 200

console.log(obj)
console.log(obj2)