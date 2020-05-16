const fs = require('fs')
const result = fs.readFileSync(process.argv[2],'utf8')
const final = result.split('\n').length - 1
console.log(final)