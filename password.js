//password maybe?
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

//I can't seem to figure ths one out completely, I have an input that gets allowed 
//But I can't get it to actually accept the input, I get a 'throw error'