const fs = require('fs')
const result = fs.readFile(process.argv[2],'utf8',(err,data)=>{
    if (err) {console.log(err)}
    const final=data.split('\n').length - 1;
    console.log(final)
})
