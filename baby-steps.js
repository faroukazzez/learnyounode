var _ = require('lodash');
var s=0;
for (let i=0; i<_.drop(process.argv,2).length; i++){
    s=s+(Number(_.drop(process.argv,2)[i]));
}
console.log(s)

