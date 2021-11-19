let name = `SarbaNanda`
let age = 25

// padStart()
console.log(age.toString().padStart(5, '0'))

// padEnd()
console.log(name.padEnd(25, '*'))

// repeat()
console.log(`${'*'.repeat(15)} ${name}\n${'*'.repeat(25)} ${age}`)