// Search Data

var arr = [1, 3, 7, 2, 8, 5, 6, 9, 11, 28, 16]

var find = 9
var isFound = false
for (var i = 0; i < arr.length; i++) {
  if (arr[i] === find) {
    console.log('Data Found at index ' + i)
    isFound = true
    break
  }
}
if (!isFound) {
  console.log('Data not Found')
}