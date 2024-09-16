const fs = require('fs');

const textIn = fs.readFileSync('text.txt', 'utf8');
console.log(textIn);

const textout = `Text ${textIn}.\n Create ${Date.now()}`;
fs.writeFileSync('textout.txt', textout);
console.log('File Creates');