// TODO: Replace this with your solution.
const mymod = require('./mymodule.js')

mymod(process.argv[2], process.argv[3], function(err, files) {
    if (err) {
        return console.error('module error: ', err)
    }

     files.forEach(function(file) {
        console.log(file)
    })
})