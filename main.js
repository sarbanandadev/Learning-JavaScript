import { log } from './logger'
import { sum, sub, multiply, div, mod } from './src/Math'

import Ternary from './src/Ternary'
import BodyType from './src/BodyType'

const DOM = document.getElementById('DOM')
let age = 25
let num = 10
const bodyType = new BodyType(65, 5.6)

let Output = `Hello!
My name is SarbaNanda. I am ${age} years old. I am ${Ternary(age)}.

${num} + ${num} = ${sum(num, num)}
${num} * ${num} = ${multiply(num)}
${num} / ${num} = ${div(num, num)}

${bodyType.print()}
`
DOM.innerHTML = Output.replace(/\n/g, '<br>')

log('Okay, Import works!')
log(Output)