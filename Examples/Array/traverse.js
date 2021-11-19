// Array Traversing 

var arr = [1, 5, 7, 3, 2, 9, 6, 10, 26, 40, 50, 100]

// arr[0]
// arr[1]
// arr[2]
// arr[3]
// arr[arr.length - 1]

// for (var i = 0; i < arr.length; i++) {
//     // console.log(i)
//     arr[i] = arr[i] + 2
// }
// console.log(arr)


var sum = 0

for (var i = 0; i < arr.length; i++) {
  sum += arr[i]
}
console.log(sum)


for (var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    console.log(arr[i])
  }
}

for (var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 1) {
    console.log(arr[i])
  }
}

var sumEven = 0

for (var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    sumEven += arr[i]
  }
}
console.log(sumEven)

var sumOdd = 0

for (var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 1) {
    sumOdd += arr[i]
  }
}
console.log(sumOdd)