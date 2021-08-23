// Node uses CommonJS under the hood, so every file is a module (by default)
// Modules - encapsolated code (only share minimum)

//invoke subject with multiple elements
const names = require ('./4-names.js')

// if invoke individual functions
// const john = require('./4-names.js')
// const peter = require('./4-names.js')

const sayHi = require ('./5-utils.js')
const data = require ('./6-alternative-flavor')
//if a module has a function executed within
require('./7-mind-grenade')

// console.log(data)

// console.log(names)
sayHi('Susan')


// when module exports john and peter as multiple elements of a subject {john, peter}
sayHi(names.john)
sayHi(names.peter)

// if module exports john and peter as individual functions (john and peter)
// sayHi(john)
// sayHi(peter)
