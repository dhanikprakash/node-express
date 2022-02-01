const { readFileSync, writeFileSync} = require('fs');

const readme = readFileSync('./content/readme.text','utf-8');

console.log(readme);