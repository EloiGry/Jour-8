

var args = process.argv.slice(2);

function multiply (num) {
    for (i=1; i<=10; i++) {
        var total = num * i
        console.log(`${num} x ${i} = ${total} `)
    }

}

multiply(parseInt (args[0]))


module.exports = multiply