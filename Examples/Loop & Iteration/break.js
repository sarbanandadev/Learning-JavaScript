// Break Statement 


var randNum = '',
    searchNum = ''

while (true) {
    var rand = Math.floor(Math.random() * 10 + 1)
    if (rand === 9) {
        searchNum += 'Search Number ' + rand + ' is Found. So Break here.'
        break // when rand is 9 instantly break the loop 
    } else {
        randNum += 'Random Number ' + rand + '\n'
    }
}
console.log(randNum + '' + searchNum)




var count = ''

for (var i = 1; i < 10; i++) {
    if (i % 6 === 0) {
        break // instantly break when count is 5
    } else {
        count += i + '\n' // 1 - 5
    }
}
console.log(count)