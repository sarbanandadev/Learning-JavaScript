// For Loop

// For Loop Structure 
// for (initialized, condition, increment) {
//      // executable codes
// }

// for (var i = 0; i < 10; i++) {
//     console.log((i + 1) + ' SarbaNanda')
// }

// for (var i = 0; i < 10; i += 2) {
//     console.log((i + 1) + ' SarbaNanda')
// }

// for (var i = 0; i < 10; i-=2) {
//     // return Infinity Loop
//     console.log((i + 1) + ' SarbaNanda')
// }


// for (var i = 1; i <= 10; i++) {
//     if (i % 2 === 1) {
//         // return odd numbers
//         console.log(i)
//     }
// }

// for (var i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         // return even numbers
//         console.log(i)
//     }
// }

for (i = 1, sum = 0, exc = ''; i <= 10; i++) {
    //The sum of numbers up to 10.
    exc += sum + ' + ' + i + ' = ' + (sum + i) + '\n'
    sum += i
}
console.log(exc + 'Result = ' + sum)



for (i = 1, sum = 0, exc = ''; i <= 10; i++) {
    if (i % 2 === 0) {
        //The sum of even numbers up to 10.
        exc += sum + ' + ' + i + ' = ' + (sum + i) + '\n'
        sum += i
    }
}
console.log(exc + 'Result = ' + sum)


var name = ['Kalomoni mui tore chudong']

for (i = 0, len = name.length, text = ''; i < len; i++) {
    text += name[i] + '\n'
}
console.log(text)