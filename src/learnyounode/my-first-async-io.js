// TODO: Replace this with your solution.
const fs = require('fs')

// read file, to string, into array delimited on \n, minus one to account for indexing
fs.readFile(process.argv[2], function(e, d) {
    if (!e) {
        console.log(d.toString().split('\n').length -1)
    }
})