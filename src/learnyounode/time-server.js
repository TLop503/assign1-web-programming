// TODO: Replace this with your solution.
const net = require('net')

// "YYYY-MM-DD hh:mm"

const server = net.createServer(function (socket) {
  const date = new Date()
  const Y = date.getFullYear()
  const M = String(date.getMonth() + 1).padStart(2, '0')
  const D = String(date.getDate()).padStart(2, '0')
  const h = String(date.getHours()).padStart(2, '0')
  const m = String(date.getMinutes()).padStart(2, '0')
  const t = `${Y}-${M}-${D} ${h}:${m}\n` // fancy formatted string rather than concatting everything!

  socket.end(t)
})
server.listen(Number(process.argv[2]))
