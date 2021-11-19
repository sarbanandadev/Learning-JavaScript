// var vs let vs const


// const vs let

// const a = 10
// let a = 10
// a = 100
// console.log(a) // Assignment to constant variable it's read only 
// console.log(a) // Assignment to let variable we can it's reassign 


if (true) {
  // var a = 10 // accessible outside the if 
  let a = 10 // not accessible outside the any block {}
}
// console.log(a)


// for (var i = 0; i < 10; i++) {

// }
// console.log(i) // accessible outside the for loop

// for (let i = 0; i < 10; i++) {

// }
// console.log(i) // i is not defined


// it's old solution is invoking (iif ― immediate invoking function)
// (function () {
//     var abc = 'ABC'
//     console.log(abc)
// })() // ABC
// console.log(abc) // abc is not defined
// so if used this way chance memory leak


{
  let name = 'ABC'
}

console.log(name) // empty string
console.log(typeof name) // string