const net = require('net')
      const dateForm=(i)=> {
        return (i < 10 ? '0' : '') + i
      }
      function time () {
        const date = new Date()
        return date.getFullYear() + '-' +
          dateForm(date.getMonth() + 1) + '-' +
          dateForm(date.getDate()) + ' ' +
          dateForm(date.getHours()) + ':' +
          dateForm(date.getMinutes())
      }
      const server = net.createServer(function (socket) {
        socket.end(time() + '\n')
      })
     server.listen(Number(process.argv[2]))