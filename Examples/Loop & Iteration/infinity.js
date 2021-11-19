// Infinity Loop


var randNum = '',
    searchNum = ''

for (;;) { // declarer empty statements
    var rand = Math.floor(Math.random() * 10 + 1)
    if (rand === 9) {
        searchNum += 'Search Number ' + rand + ' is Found. So Break here.'
        break // break loop
    } else {
        randNum += 'Random Number ' + rand + '\n'
    }
}
console.log(randNum + '' + searchNum)

