var a = 100

// newPrint(a) // error

print(10) // 10

var newPrint = print
newPrint(45) // 45

function print(a) {
    console.log(a)
}

print(a) // 100

// Creational Phase
// a = undefined
// newPrint = undefined
// print = ref

// Executional Phase
// a = 100
// newPrint = ref