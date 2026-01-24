const http = require('http')
const bl = require('bl')

const results = []
let count = 0
const total = process.argv.length - 2

for (let i = 2; i < process.argv.length; i++) {
  const idx = i - 2
  http.get(process.argv[i], function (res) {
    res.pipe(bl(function (err, data) {
      if (err) return console.error(err)
      results[idx] = data.toString()
      count++
      if (count === total) {
        for (let j = 0; j < results.length; j++) {
          console.log(results[j])
        }
      }
    }))
  }).on('error', console.error)
}
