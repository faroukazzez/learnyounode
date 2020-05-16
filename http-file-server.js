const fs=require('fs')
const http = require('http')
const server = http.createServer(callback= (request, response) =>{
    response.writeHead(200, { 'content-type': 'text/plain' })
    fs.createReadStream(process.argv[3]).pipe(response)
})
server.listen(Number(process.argv[2]))