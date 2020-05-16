const http=require('http');
const path=process.argv[2];
http.get(path,function callback(response) {
    response.setEncoding('utf8')
  response.on('data', console.log)
  response.on('error', console.error)
})