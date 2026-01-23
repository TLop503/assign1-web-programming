// TODO: Replace this with your solution.
const fs = require('fs')

module.exports = function (dir, ext, cb) {
    let outList = [];
    fs.readdir(dir, function (err, list) {
        if (!err) {
            for (let i = 0; i < list.length; i++) {
                if (list[i].endsWith('.' + ext)) {
                    outList.push(list[i])
                }
            }
        } else {
            return cb(err)
        }
        return cb(null, outList)
    })
}