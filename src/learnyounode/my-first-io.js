// TODO: Replace this with your solution.
const fs = require('fs')

// read file, to string, into array delimited on \n, minus one to account for indexing
console.log(fs.readFileSync(process.argv[2]).toString().split('\n').length - 1)
