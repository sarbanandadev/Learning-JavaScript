// Destructaring 


// Object Destructaring
let person = {
  name: 'SarbaNanda',
  email: 'sarbananda@gmail.com',
  address: {
    city: 'Rangamati',
    division: 'Chittagong',
    county: 'Bangladesh'
  }
}

// single layer destructuring
// let { name, email } = person
// console.log(name, email)

// multi layer destructuring
let { name, email, address: { city, county, division } } = person
console.log(`name: ${name}\nemail: ${email}\naddress: ${city}, ${division}, ${county}`)




// Array Destructaring
// array destructuring is not very important or appropriate
let arr = [1, 2, 3, 4, 5]
let [first, second, , , last] = arr

console.log(first, second, last)