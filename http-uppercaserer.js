const http=require('http')
const map = require('through2-map')
const server=http.createServer(callback=(request,response)=>{
    if (request.method !== 'POST') {
        return response.end('send me a POST\n')
      }
    request.pipe(map(function (chunk) {
       return chunk.toString().toUpperCase()
     })).pipe(response)

    })
    server.listen(Number(process.argv[2]))

     