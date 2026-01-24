// TODO: Replace this with your solution.
const fs = require('fs')

fs.readdir(process.argv[2], function (err, list) {
  if (!err) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].endsWith('.' + process.argv[3])) {
        console.log(list[i])
      }
    }
  }
})
