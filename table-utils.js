var multiply = require("./multiply")
console.log(multiply)

var args = process.argv.slice(2);

function addition (num) {
    for (i=1; i<=10; i++) {
        var total = num + i
        console.log(`${num} + ${i} = ${total} `)
    }

}

addition(parseInt (args[0]))

module.exports = {multiply, addition}