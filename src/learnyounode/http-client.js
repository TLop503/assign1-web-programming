// TODO: Replace this with your solution.
const http = require('http')

http.get(process.argv[2], function (res) {
  res.setEncoding('utf-8')

  res.on('error', function (err) {
    console.error(err)
  })

  res.on('data', function (data) {
    console.log(data)
  })
})
