const http = require('http')

parsetime=(time)=> {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

unixtime=(time)=> {
  return { unixtime: time.getTime() }
}

const server = http.createServer(function (request, response) {
  const parsedUrl = new URL(request.url, 'http://example.com')
  const time = new Date(parsedUrl.searchParams.get('iso'))
  let result

  if (/^\/api\/parsetime/.test(request.url)) {
    result = parsetime(time)
  } else if (/^\/api\/unixtime/.test(request.url)) {
    result = unixtime(time)
  }

  if (result) {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(result))
  } else {
    response.writeHead(404)
    response.end()
  }
})
server.listen(Number(process.argv[2]))