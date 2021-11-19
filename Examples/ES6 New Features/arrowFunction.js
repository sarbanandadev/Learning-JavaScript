// Arrow/Fat Arrow Function

// normal arrow function
let arrow1 = (a, b) => {
  let name1 = 'SarbaNanda'
  let name2 = 'ChidaNanda'
  return `${name1} is ${a} and ${name2} is ${b}.\n${name1} is ${a < 18 ? 'not adult.' : 'adult'} and ${name2} is ${b < 18 ? 'not adult.' : 'adult'}.`
}
console.log(arrow1(25, 17))

// multi parameters arrow function (fat arrow function)
let arrow2 = (a, b) => a + b // without return keyword 
console.log(arrow2(50, 45))

// single parameter arrow function
let arrow3 = x => x + x
console.log(arrow3(50))