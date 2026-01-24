// TODO: Replace this with your solution.
var http = require('http')
var fs = require('fs')

const server = http.createServer(function(req, res) {
    const stream = fs.createReadStream(process.argv[3])
    stream.pipe(res)
})

server.listen(process.argv[2])