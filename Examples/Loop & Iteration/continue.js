// Continue Statement 

var count = ''

for (var i = 0; i < 10; i++) {
    if (i === 3 || i === 7) {
        continue // skip 3 and 7
    } else {
        count += i + '\n'
    }
}

console.log(count)