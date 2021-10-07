
var args = process.argv.slice(2);


var array = ["+","-","/","x","%"]

function calculate(n1, n2, op) {
    if (op === array[0]) {
        console.log(n1 + n2)}
    if (op === array[1]) {
        console.log(n1 - n2)}
    if (op === array[2]) {
        console.log(n1 / n2)}
    if (op === array[3]) {
        console.log(n1 * n2)}
    if (op === array[4]) {
        console.log(n1 % n2)
}
}

calculate(parseInt (args[0]),parseInt (args[1]), args[2])



