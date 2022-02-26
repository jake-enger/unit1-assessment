//password maybe?
const { get } = require('http');
const readline = require('readline')
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log("Hello and welcome!")

reader.question("Please input password", function(input){
    function getCharacterLentgh (str) {
        return [...str].length;
    }
     console.log(getCharacterLentgh('A\uD87E\uDC04z'));

Object.defineProperty(string.prototype, 'charLength', {
    get () {
        return getCharacterLentgh(this);
    }
});

console.log('A\uD87E\uDC04Z'.charLength);})