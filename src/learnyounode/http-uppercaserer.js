// TODO: Replace this with your solution.

var http = require('http')
var fs   = require('fs')
var map  = require('through2-map')

const server = http.createServer(function(req, res) {
    console.log(req.body)
    req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(res)
})
server.listen(process.argv[2])