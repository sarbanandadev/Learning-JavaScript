// Create Custom Integrable Object


// let obj = {
//     start: 1,
//     end: 10
// }

// for (let v of obj) {
//     console.log(v) // error: obj is not iterable
// }



// Custom The Iterator Object
let custObj = {
  start: 1,
  end: 5,
    [Symbol.iterator]: function() {
    let currVal = this.start
    const self = this
    return {
      next() {
        return {
          done: currVal > self.end,
          value: currVal > self.end ? undefined : currVal++
        }
      }
    }
  }
}

for (let v of custObj) {
  console.log(v) // custObj is iterable 1 ― 5
}

let iterate = custObj[Symbol.iterator]()

console.log(iterate.next()) // done: false, value: 1
console.log(iterate.next()) // done: false, value: 2
console.log(iterate.next()) // done: false, value: 3
console.log(iterate.next()) // done: false, value: 4
console.log(iterate.next()) // done: false, value: 5
console.log(iterate.next()) // done: true, value: undefined
console.log(iterate.next()) // done: true, value: undefined
console.log(iterate.next()) // done: true, value: undefined