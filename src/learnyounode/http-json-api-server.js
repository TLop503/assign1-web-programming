// TODO: Replace this with your solution.
var http = require('http')
var url  = require('url')

function dateStruct(date) {
    return {
        hour : date.getHours(),
        minute : date.getMinutes(),
        second: date.getSeconds()
    }
}

const server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type':'application/json'})
    url = url.parse(req.url, true)
    var jsonData
    const date = new Date(url.query.iso)

    if (url.pathname == '/api/parsetime') {
        jsonData = dateStruct(date)
    } else if (url.pathname == '/api/unixtime') {
        jsonData = {'unixtime' : date.getTime() }
    }

    res.end(JSON.stringify(jsonData))
})
server.listen(process.argv[2])