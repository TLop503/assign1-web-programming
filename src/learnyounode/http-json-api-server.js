// TODO: Replace this with your solution.
const http = require('http')
let url = require('url')

function dateStruct (date) {
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  }
}

const server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  url = url.URL(req.url, true)
  let jsonData
  const date = new Date(url.query.iso)

  if (url.pathname === '/api/parsetime') {
    jsonData = dateStruct(date)
  } else if (url.pathname === '/api/unixtime') {
    jsonData = { unixtime: date.getTime() }
  }

  res.end(JSON.stringify(jsonData))
})
server.listen(process.argv[2])
