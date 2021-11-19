// Object in JavaScript 

// student 1: 
// math: 80
// chemistry: 75
// physics: 86
// higher math: 90

// [80, 75, 86, 90]


// Object Literal 

var obj = {}

// console.log(obj) // {}
// console.log(typeof obj) // object

obj.x = 10
// console.log(obj)

var point = {
    x: 10,
    y: 20
}

// point.y = 30 // dot notation 

point.z = 30

console.log(point)


// Object Constructor 

var obj2 = Object()
obj2.a = 10

console.log(obj2)

var obj3 = new Object()
obj3.b = 20

console.log(obj3)



// Accessing  Object

var point2 = {
    x: 10,
    y: 20,
    z: 30
}

console.log(point2.x)
console.log(point2.y)

console.log(point2.x + point2.z)

 // Array Notation 
console.log(point2['x'])
console.log(point2['z'])

var show = 'x'
console.log(point2.show) // undefined

console.log(point2[show]) // 10

var show2 = 'z'
console.log(point2[show2]) // 30



// Setting Object 

var point3 = {
    x: 10,
    y: 20,
    z: 30
}

point3.x =45 // update

point3.a = 16 // create 

console.log(point3)

console.log(point3.d) // undefined 

point3['y'] = 100 // update

var prop = 'z' // update with variable 
point3[prop] = 55 // update

console.log(point3)



// Remove Object Properties 

point3.a = undefined

console.log(point3)

// used delete operator 
delete point3.a
console.log(point3)



