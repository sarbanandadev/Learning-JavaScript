// function add(a, b) {
//     var result = a + b
//     console.log(result)
// }

// add(25,50)
// add(7,3)
// add(700,500)


var arr1 = [1, 2, 3]
var arr2 = [5, 7, 9, 10]
var arr3 = [9, 7, 1, 5, 7]

// var sum1 = 0
// for (var i = 0; i < arr1.length; i++) {
//     sum1 += arr1[i]
// }
// console.log(sum1)

// var sum2 = 0
// for (var i = 0; i < arr2.length; i++) {
//     sum2 += arr2[i]
// }
// console.log(sum2)

// var sum3 = 0
// for (var i = 0; i < arr3.length; i++) {
//     sum3 += arr3[i]
// }
// console.log(sum3)


// function sumOfArray(arr) {
//     var sum = 0
//     for (var i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     console.log(sum)
// }

// sumOfArray(arr1)
// sumOfArray(arr2)
// sumOfArray(arr3)


// Argument Object 
function test(a, b, c) {
  // console.log(arguments)
  // console.log(JSON.stringify(arguments))
  // console.log(typeof a) // undefined
  for (var i = 0; i < arguments.length; i++) {
    console.log(arguments[i])
  }
}

test()
test(10, 20, 30)


function addAll() {
  var sum = 0
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  console.log(sum)
}


// addAll(1,2,3)
// addAll(1,2,3,4,5,6,7,8,9,10)

var a = addAll(1, 2, 3)
var b = addAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

console.log(a, b) // funtion is not return, so undefined