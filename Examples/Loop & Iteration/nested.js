// Nested Loop


var num = 5

var exc = ''
for (var i = 1; i <= num; i++) {
    var res = ''
    for (var j = 1; j <= i; j++) {
        res += j + ' '
    }
    exc += res + '\n'
}

console.log(exc)
// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5 




var count = 10

var stars = ''
for (var i = 1; i <= count; i++) {
    var res = ''
    for (var j = 1; j <= i; j++) {
        res += '* '
    }
    stars += res + '\n'
}

var starsqr = ''
for (var i = 1; i <= count; i++) {
    var res = ''
    for (var j = 1; j <= count; j++) {
        res += '* '
    }
    starsqr += res + '\n'
}

console.log(stars+'\n'+starsqr)

// * 
// * * 
// * * * 
// * * * * 
// * * * * * 
// * * * * * * 
// * * * * * * * 
// * * * * * * * * 
// * * * * * * * * * 
// * * * * * * * * * * 

// * * * * * * * * * * 
// * * * * * * * * * * 
// * * * * * * * * * * 
// * * * * * * * * * * 
// * * * * * * * * * * 
// * * * * * * * * * * 
// * * * * * * * * * * 
// * * * * * * * * * * 
// * * * * * * * * * * 
// * * * * * * * * * * 