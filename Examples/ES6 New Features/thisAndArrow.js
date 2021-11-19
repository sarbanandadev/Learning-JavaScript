// Arrow Function an this keyword 


function test() {
  console.log(this) // refer the window object if use without strick mood
}

test()


// this is always referred his this object in general function
let obj1 = {
  name: 'SarbaNanda',
  print: function() {
    console.log(this) // his object obj1
  }
}

obj1.print()


// but this is always referred his parent's this object in arrow function
let obj2 = {
  name: 'SarbaNanda',
  print: () => {
    console.log(this) // his parent is window object 
  }
}

obj2.print()



// so this has a create problem when use general function in a object
let obj3 = {
  name: 'SarbaNanda',
  print: function() {
    setTimeout(function() {
      console.log(`Hello, I am ${this.name}.`) // name is undefined (empty string)
    }, 1000)
  }
}

obj3.print()


// so it's 1st solution is 
let obj4 = {
  name: 'SarbaNanda',
  print: function() {
    let self = this // defined the variable outside
    setTimeout(function() {
      console.log(`Hello, I am ${self.name}.`)
    }, 1000)
  }
}

obj4.print()


// 2nd solution is 
let obj5 = {
  name: 'SarbaNanda',
  print: function() {
    setTimeout(function() {
      console.log(`Hello, I am ${this.name}.`)
    }.bind(this), 1000) // used the bind(), call(), Apply() methods 
  }
}

obj5.print()



// easy solution is used the arrow function 
// but not aplicable bind(), call(), Apply() methods with arrow function 
let obj6 = {
  name: 'SarbaNanda',
  print: function() {
    setTimeout(() => {
      console.log(this) // referred parent object 
      console.log(`Hello, I am ${this.name}.`)
    }, 1000)
  }
}

obj6.print()