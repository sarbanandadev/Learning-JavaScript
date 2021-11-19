// Insert and Remove Elements


var arr = [1, 2, 3, 4, 5, 6, 7, 8]

// Insert 9 to index 3

// arr[3] = 9
// arr.push(9) // insert last
// arr.unshift(9) // insert first

// arr.splice(3, 0, 9, 10)

// arr[3] = undefined // null
// arr.pop() // remove last element
// arr.shift() // remove first element

// arr.splice(3, 1)

arr.splice(3, 0, 9, 44)

console.log(arr)